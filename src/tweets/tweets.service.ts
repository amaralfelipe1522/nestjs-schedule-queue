import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class TweetsService {
  constructor(
    @InjectModel(Tweet)
    private tweetModel: typeof Tweet,
  ) {}

  async create(createTweetDto: CreateTweetDto) {
    return await this.tweetModel.create(createTweetDto as any);
  }

  async findAll() {
    return await this.tweetModel.findAll();
  }

  async findOne(id: number) {
    return await this.tweetModel.findByPk(id);
  }

  async update(id: number, updateTweetDto: UpdateTweetDto) {
    return await this.tweetModel.update(
      { ...updateTweetDto },
      { where: { id }, returning: true },
    );
  }
  // const [numberOfAffectedRows, [updatedPost]] = await this.postRepository.update({ ...data }, { where: { id, userId }, returning: true });
  // return { numberOfAffectedRows, updatedPost };

  async remove(id: number) {
    return await this.tweetModel.destroy({ where: { id } });
  }
}
