import { Body, Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Param, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { ApiOkResponse, ApiBody } from '@nestjs/swagger';
import {
  PaginateAndFilterResponse,
  FindOneResponse,
  GetBestsellersResponse,
  GetNewResponse,
  SearchResponse,
  SearchRequest,
  GetByNameResponse,
  GetByNameRequest,
} from './types';

@Controller('Products')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}

  @ApiOkResponse({ type: PaginateAndFilterResponse })
  @UseGuards(AuthenticatedGuard)
  @Get()
  paginateAndFilter(@Query() query) {
    return this.ProductsService.paginateAndFilter(query);
  }

  @ApiOkResponse({ type: FindOneResponse })
  @UseGuards(AuthenticatedGuard)
  @Get('find/:id')
  getOne(@Param('id') id: string) {
    return this.ProductsService.findOne(id);
  }

  @ApiOkResponse({ type: GetBestsellersResponse })
  @UseGuards(AuthenticatedGuard)
  @Get('bestsellers')
  getBestseller() {
    return this.ProductsService.bestsellers();
  }

  @ApiOkResponse({ type: GetNewResponse })
  @UseGuards(AuthenticatedGuard)
  @Get('new')
  getNew() {
    return this.ProductsService.new();
  }

  @ApiOkResponse({ type: SearchResponse })
  @ApiBody({ type: SearchRequest })
  @UseGuards(AuthenticatedGuard)
  @Post('search')
  search(@Body() { search }: { search: string }) {
    return this.ProductsService.searchByString(search);
  }

  @ApiOkResponse({ type: GetByNameResponse })
  @ApiBody({ type: GetByNameRequest })
  @UseGuards(AuthenticatedGuard)
  @Post('name')
  getByName(@Body() { name }: { name: string }) {
    return this.ProductsService.findOneByName(name);
  }
}
