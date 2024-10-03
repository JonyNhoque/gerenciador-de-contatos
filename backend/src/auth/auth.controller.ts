import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CriarUsuarioDto } from './dto/criar-usuario.dto';
import { LoginDto } from './dto/login.dto';
import { Usuario } from './schemas/usuario.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CriarUsuarioDto): Promise<Usuario> {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<Usuario | null> {
    return this.authService.login(loginDto);
  }
}
