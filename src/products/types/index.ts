import { ApiProperty } from '@nestjs/swagger';
import { Op } from 'sequelize';

class Products {
    @ApiProperty({ example: 1 })
    id: number;
  
    @ApiProperty()
    products_manufacturer: string;
  
    @ApiProperty()
    price: string;
  
    @ApiProperty()
    parts_manufacturer: string;
  
    @ApiProperty()
    vendor_code: string;
  
    @ApiProperty()
    name: string;
  
    @ApiProperty()
    description: string;
  
    @ApiProperty()
    compatibility: string;
  
    @ApiProperty()
    images: string;
  
    @ApiProperty({ example: 123 })
    popularity: number;
  
    @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
    createdAt: string;
  
    @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
    updatedAt: string;
  }
  
  export class PaginateAndFilterResponse {
    @ApiProperty({ example: 10 })
    count: number;
  
    @ApiProperty({ type: Products, isArray: true })
    rows: Products;
  }
  
  export class Bestsellers extends Products{
    @ApiProperty({ example: true })
    bestseller: boolean;
  }
  
  export class GetBestsellersResponse extends PaginateAndFilterResponse {
    @ApiProperty({ example: 10 })
    count: number;
  
    @ApiProperty({ type: Products, isArray: true })
    rows: Bestsellers;
  }
  
  export class NewParts extends Products {
    @ApiProperty({ example: true })
    new: boolean;
  }
  
  export class GetNewResponse extends PaginateAndFilterResponse {
    @ApiProperty({ example: 10 })
    count: number;
  
    @ApiProperty({ type: Products, isArray: true })
    rows: NewParts;
  }
  
  export class SearchByLetterResponse extends Products {
    @ApiProperty({ example: 'Provident incidunt.' })
    name: string;
  }
  
  export class SearchResponse extends PaginateAndFilterResponse {
    @ApiProperty({ type: SearchByLetterResponse, isArray: true })
    rows: SearchByLetterResponse;
  }
  
  export class SearchRequest {
    @ApiProperty({ example: 'r' })
    search: string;
  }
  
  export class GetByNameResponse extends Products {
    @ApiProperty({ example: 'Provident incidunt.' })
    name: string;
  }
  
  export class GetByNameRequest {
    @ApiProperty({ example: 'Provident incidunt.' })
    name: string;
  }
  
  export class FindOneResponse extends Products {}
  
  export interface IProductsQuery {
    limit: string;
    offset: string;
    products: string | undefined;
    parts: string | undefined;
    priceFrom: string | undefined;
    priceTo: string | undefined;
  }
  
  export interface IProductsFilter {
    products_manufacturer: string | undefined;
    parts_manufacturer: string | undefined;
    price: { [Op.between]: number[] };
  }
  