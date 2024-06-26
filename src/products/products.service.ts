import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Products } from './products.model';
import { IProductsFilter, IProductsQuery } from './types';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products)
    private ProductsModel: typeof Products,
  ) {}

  async paginateAndFilter(
    query: IProductsQuery,
  ): Promise<{ count: number; rows: Products[] }> {
    const limit = +query.limit;
    const offset = +query.offset * 20;
    const filter = {} as Partial<IProductsFilter>;

    if (query.priceFrom && query.priceTo) {
      filter.price = {
        [Op.between]: [+query.priceFrom, +query.priceTo],
      };
    }

    if (query.products) {
      filter.products_manufacturer = JSON.parse(decodeURIComponent(query.products));
    }

    if (query.parts) {
      filter.parts_manufacturer = JSON.parse(decodeURIComponent(query.parts));
    }

    return this.ProductsModel.findAndCountAll({
      limit,
      offset,
      where: filter,
    });
  }

  async bestsellers(): Promise<{ count: number; rows: Products[] }> {
    return this.ProductsModel.findAndCountAll({
      where: { bestseller: true },
    });
  }

  async new(): Promise<{ count: number; rows: Products[] }> {
    return this.ProductsModel.findAndCountAll({
      where: { new: true },
    });
  }

  async findOne(id: number | string): Promise<Products> {
    return this.ProductsModel.findOne({
      where: { id },
    });
  }

  async findOneByName(name: string): Promise<Products> {
    return this.ProductsModel.findOne({
      where: { name },
    });
  }

  async searchByString(
    str: string,
  ): Promise<{ count: number; rows: Products[] }> {
    return this.ProductsModel.findAndCountAll({
      limit: 20,
      where: { name: { [Op.like]: `%${str}%` } },
    });
  }
}
