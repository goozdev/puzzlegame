import { TemplateRef } from '@angular/core';

export interface Puzzle {
    id: number;
    template: TemplateRef<any>;
    hintTemplates: TemplateRef<any>[];
    answer: string;
}
