export class HalaalProduct {
    title: string;
    ingredients: string;
    isHalaal: boolean = false;
    isVegan: boolean = false;
    isVegetarian: boolean = false;

    constructor(title: string, description: string){
        this.title = title;
        this.ingredients = description;
    }
}