import { db } from '../db.js'

export function getProducts(_, res){
    const q = "SELECT * FROM produto";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);   
    })
}

export function addProduct(req, res){
    const q = "INSERT INTO produto(`id`, `name`, `price`, `quantidade`) VALUES (?)";

    const values = [
        req.body.id,
        req.body.name,
        req.body.price,
        req.body.quantidade,
    ]

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Produto cadastro com sucesso.")
    })
}

export function updateProduct(req, res){
    const q = "UPDATE produtos SET `id` = ?, `price` = ? WHERE `id_produtos` = ?"

    const values = [
        req.body.titulo,
        req.body.price,
        req.body.telefone,
        req.body.data_nascimento,
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Produto atualizado com sucesso");
    })
}

export function deleteProduct(req, res){
    const q = "DELETE FROM produtos WHERE `id` = ?"

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Produto deletado com sucesso.");
    })
}