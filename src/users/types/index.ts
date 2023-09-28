import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'Ivan123' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'Ivan',
        password: 'Ivan123',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'Logged In' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'Session has ended' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'Ivan@gmail.com' })
  email: string;
}

export class SignUpResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({
    example: '$2b$10$3ZFKZ9G4MVFqkwo.Aj1VkeQ919m8g60ncp5gE0KG1TqHLkYwwBvm2',
  })
  password: string;

  @ApiProperty({ example: 'Ivan@gmail.com' })
  email: string;

  @ApiProperty({ example: '2023-09-28T13:56:21.714Z' })
  updatedAt: string;

  @ApiProperty({ example: '2023-09-28T13:56:21.714Z' })
  createdAt: string;
}
