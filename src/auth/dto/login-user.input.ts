import { Field, InputType} from "@nestjs/graphql";
import { IsEmail, IsOptional, IsString } from "class-validator";

@InputType()
export class LoginUserInput {
    @Field()
    @IsEmail()
    email: string

    @Field()
    @IsString()
    password: string

    @Field({nullable: true})
    @IsString()
    @IsOptional()
    country: string
}