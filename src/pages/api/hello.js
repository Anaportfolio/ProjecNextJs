// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
     name: "Teste API",
     metodo: req.method,
     nome: req.query.nome,
     idade: +req.query.idade
    });
}
