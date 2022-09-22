/**
 * Essa classe representa a informação que o backend usa pra
 * atualizar o estoque quando o usuário faz entrada e saída.
 *  
 */
 export interface Estoque{
    id: string;
    nome: string;
    quantidade: number;
}