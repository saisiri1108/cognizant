import { Pipe, PipeTransform } from '@angular/core';

// A custom pipe - same category as the built-in date/uppercase/currency pipes.
// Usage in a template: {{ someLongText | truncate:40 }}
@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 50, suffix = '...'): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + suffix : value;
  }
}
