import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Rota POST postar/criar aluno
app.post('/alunos', async (req, res) => {
    try {
        const aluno = await prisma.aluno.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        });
        res.status(201).json(aluno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota GET listar todos os alunos
app.get('/alunos', async (req, res) => {
    try {
        const alunos = await prisma.aluno.findMany();
        res.status(200).json(alunos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota PUT atulizar 
app.put('/alunos/:id', async (req, res) => {
    try {
        const aluno = await prisma.aluno.update({
            where: { 
                id: req.params.id 
            },
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        });
        res.status(201).json(aluno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/alunos/:id', async (req, res) => {
    await prisma.aluno.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'Aluno deletado com sucesso' });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
