export interface IRecipe{
    id: number;
    title: string;
    content: string;
    created_at: Date;
    updated_at?: Date;
}

//Recorte
export type TRecipeCreateData = Pick<IRecipe, "title" | "content">;

export type TRecipeUpdateData = Partial<TRecipeCreateData>;

// Type - instância de tipo - armazenar qualquer tipo existente no Typescript

//type TUserRole = "USER" | "MODERATOR" | "ADMIN";
//type TStringOrNumber = string | number;
//type TRecipe = IRecipe;

// Omit | Pick | Partial - criar variação de tipo com base em uma interface
// Omit - Interagir com uma interface e omitir chaves da mesma
// Pick - Interagir com uma interface e "pegar" chaves da mesma
// Partial - Transformar todas as chaves de um tipo de objeto em opcionais

//export type TRecipeCreateData = Omit<IRecipe, "id" | "created_at" | "updated_at">;

