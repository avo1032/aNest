import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async signUp(@Body() body: JoinRequestDto){
    return await this.usersService.signUp(body);
  }

}
