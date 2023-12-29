import { Orama, insert, search } from '@orama/orama';

export class OramaDB {
  private db: Orama;

  constructor(db: Orama) {
    this.db = db;
  }

  async search(term: string) {
    const results = await search(this.db, { term });
    return results;
  }

  async insert(data) {
    await insert(this.db, data);
  }
}
