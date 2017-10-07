import {Quote} from "../data/quoute.interface";

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addQuoteToFavorites(value: Quote) {
    this.favoriteQuotes.push(value);
    console.log(value);
  }

  removeQuoteFormFavorites(value: Quote) {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == value.id;
    });
    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuotes() {
    return this.favoriteQuotes.slice();
  }
}
