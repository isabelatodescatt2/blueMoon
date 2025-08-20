import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.use(cors({
  origin: 'http://localhost:3001', 
  credentials: true
}));

app.use(express.json());

// Rota POST criar aluno
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

// Rota PUT atualizar aluno
app.put('/alunos/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const aluno = await prisma.aluno.update({
            where: { id },
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        });

        res.status(200).json(aluno); // 200 = atualizado com sucesso
    } catch (error) {
        if (error.code === 'P2025') {
            // Erro padrão do Prisma quando o registro não existe
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }
        res.status(500).json({ error: error.message });
    }
});

// Rota DELETE excluir aluno
app.delete('/alunos/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        await prisma.aluno.delete({
            where: { id }
        });

        res.status(200).json({ message: 'Aluno deletado com sucesso' });
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

