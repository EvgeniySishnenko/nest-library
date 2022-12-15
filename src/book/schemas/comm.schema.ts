import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type CommDocument = Comm & Document;
@Schema()
export class Comm {
  @Prop({ required: true })
  public id: string;
  @Prop()
  public text: string;
}
export const CommSchema = SchemaFactory.createForClass(Comm);
