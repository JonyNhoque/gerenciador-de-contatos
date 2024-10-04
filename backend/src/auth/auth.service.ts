import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CriarUsuarioDto } from './dto/criar-usuario.dto';
import { LoginDto } from './dto/login.dto';
import { Usuario, UsuarioDocument } from './schemas/usuario.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Usuario.name) private userModel: Model<UsuarioDocument>) {}

  async register(createUserDto: CriarUsuarioDto): Promise<Usuario> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });
    return createdUser.save();
  }

  async login(loginDto: LoginDto): Promise<Usuario | null> {
    console.log('Login => ', loginDto);
    const user = await this.userModel.findOne({ username: loginDto.username });
    if (!user) {
        console.log('Usuário não encontrado');
        return null;  
    }
    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
    if (isPasswordValid) {
        return user;
    }
    return null;
  }
}
