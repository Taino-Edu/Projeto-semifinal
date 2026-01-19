import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Apollo, gql } from 'apollo-angular';

// Query para buscar dados
const GET_CANDIDATOS = gql`
  query {
    candidatos { id, nome, email, coluna }
  }
`;

// Mutation para mover
const MOVER_CANDIDATO = gql`
  mutation($id: String!, $novaColuna: String!) {
    moverCandidato(id: $id, novaColuna: $novaColuna) { id }
  }
`;

// NOVO: Mutation para criar
const CRIAR_CANDIDATO = gql`
  mutation($nome: String!, $email: String!) {
    criarCandidato(nome: $nome, email: $email) { id }
  }
`;

// NOVO: Mutation para deletar
const REMOVER_CANDIDATO = gql`
  mutation($id: String!) {
    removerCandidato(id: $id)
  }
`;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  todo: any[] = [];
  doing: any[] = [];
  done: any[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.carregarDados();
  }

  carregarDados() {
    this.apollo.watchQuery({ query: GET_CANDIDATOS }).valueChanges.subscribe((result: any) => {
      // Limpa os arrays antes de encher de novo para evitar duplicatas visuais
      const todos = result.data?.candidatos || [];
      this.todo = todos.filter((c: any) => c.coluna === 'TODO');
      this.doing = todos.filter((c: any) => c.coluna === 'DOING');
      this.done = todos.filter((c: any) => c.coluna === 'DONE');
    });
  }

  // Função chamada pelo botão Adicionar
  adicionar(nomeInput: HTMLInputElement, emailInput: HTMLInputElement) {
    if (!nomeInput.value) return;

    this.apollo.mutate({
      mutation: CRIAR_CANDIDATO,
      variables: { nome: nomeInput.value, email: emailInput.value },
      refetchQueries: [{ query: GET_CANDIDATOS }] // Atualiza a lista automaticamente
    }).subscribe(() => {
      // Limpa os campos
      nomeInput.value = '';
      emailInput.value = '';
    });
  }

  // Função chamada pelo botão Excluir (X)
  remover(id: string) {
    if(confirm('Tem certeza que quer excluir?')) {
      this.apollo.mutate({
        mutation: REMOVER_CANDIDATO,
        variables: { id: id },
        refetchQueries: [{ query: GET_CANDIDATOS }]
      }).subscribe();
    }
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      const candidato = event.container.data[event.currentIndex];
      const novaColuna = event.container.id; 
      this.apollo.mutate({
        mutation: MOVER_CANDIDATO,
        variables: { id: candidato.id, novaColuna: novaColuna }
      }).subscribe();
    }
  }
}