export class HalaalProduct {
    id: string;
    title: string;
    imageUrl: string;
    ingredients: string;
    isHalaal: boolean = false;
    isVegan: boolean = false;
    isVegetarian: boolean = false;

    constructor(id: string, title: string, imageUrl: string, description: string){
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.ingredients = description;
    }
}