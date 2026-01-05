import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { HashUtil } from 'src/common/utils/hash.util';
import { Users } from 'src/entities';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const { username, password } = loginDto;

    const user = await this.usersRepository.findOne({
      where: { username: username },
    });

    if (!user) {
      throw new UnauthorizedException('ไม่พบผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง');
    }

    const isPasswordValid = await HashUtil.compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('ไม่พบผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง');
    }

    const payload = {
      sub: user.userId,
      username: user.username,
      role: user.role,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: user.userId,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    };
  }

  async register(registerDto: RegisterDto) {
    const existingUser = await this.usersRepository.findOne({
      where: [{ username: registerDto.username }, { email: registerDto.email }],
    });

    if (existingUser) {
      throw new ConflictException('Username หรือ Email นี้ถูกใช้งานแล้ว');
    }

    const hashedPassword = await HashUtil.hash(registerDto.password);

    const newUser = this.usersRepository.create({
      username: registerDto.username,
      password: hashedPassword,
      email: registerDto.email,
      firstName: registerDto.firstName,
      lastName: registerDto.lastName,
      isActive: true,
      role: 'User',
    });

    await this.usersRepository.save(newUser);

    return {
      message: 'ลงทะเบียนสำเร็จ',
      user: {
        username: newUser.username,
        email: newUser.email,
      },
    };
  }

  async getProfile(userId: number) {
    const user = await this.usersRepository.findOne({
      where: { userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      id: user.userId,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      roles: [user.role],
      permissions: [], 
    };
  }
}
