import { Color } from '../utils/constants/Color';
import { Palette } from '../utils/constants/Palette';

interface PaletteResponse {
  colors: string[];
  colorWidths: number[];
}

export class PaletteService {
  private static readonly BASE_URL = 'http://www.colourlovers.com/api/palettes';
  private static readonly DEFAULT_PARAMS = {
    format: 'json',
    jsonCallback: 'JSON_CALLBACK',
    showPaletteWidths: 1,
    type: 'top',
  };

  public static async list(type: string = 'top'): Promise<Palette[]> {
    const url = `${this.BASE_URL}/${type}?format=${this.DEFAULT_PARAMS.format}&jsonCallback=${this.DEFAULT_PARAMS.jsonCallback}&showPaletteWidths=${this.DEFAULT_PARAMS.showPaletteWidths}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data: PaletteResponse[] = await response.json();
    return data.map((palette) => {
      palette.colors = palette.colors.map((color, index) => {
        return new Color(color, palette.colorWidths[index]);
      });
      return palette;
    });
  }
}
