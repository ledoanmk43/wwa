import { EUserMessage } from '@common/enums'
import { ValidatePwRegex } from '@core/auth/constants'
import { Role } from '@core/user/entities'
import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, Matches } from 'class-validator'

export class SignInDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string

  @ApiProperty()
  @Matches(ValidatePwRegex, {
    message: EUserMessage.INVALID_USER_PASSWORD
  })
  @IsNotEmpty()
  password: string
}

export class SignUpDto extends SignInDto {
  @ApiProperty()
  @IsNotEmpty()
  firstName: string

  @ApiProperty()
  @IsNotEmpty()
  lastName: string

  role: Role
}

export class SignOutDto {
  @ApiProperty()
  @IsNotEmpty()
  refreshToken: string
}
