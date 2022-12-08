import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  get(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.id, pram.url);
  }

  @Post(':id/chats')
  postChat(@Body() body) {}
}
