export class HalaalProduct {
    id: string;
    title: string;
    ingredients: string;
    isHalaal: boolean = false;
    isVegan: boolean = false;
    isVegetarian: boolean = false;

    constructor(id: string, title: string, description: string){
        this.id = id;
        this.title = title;
        this.ingredients = description;
    }
}