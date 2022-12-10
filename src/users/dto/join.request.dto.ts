import { IsNotEmpty, IsString } from "class-validator";

export class JoinRequestDto {
  @IsString() @IsNotEmpty() public email: string;
  @IsString() public nickname: string;
  @IsString() public password: string;
}
