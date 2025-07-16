import { Controller, Post, Body, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: any) {
    return this.authService.login(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Req() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout() {
    // Placeholder: En JWT stateless, el logout se maneja en frontend o con blacklist
    return { message: 'Logout exitoso (placeholder)' };
  }

  @Post('refresh')
  async refresh() {
    // Placeholder: Implementar refresh token si se requiere
    return { message: 'Refresh token (placeholder)' };
  }
} 