class ContaBancaria {
    constructor(numeroConta, saldo) {
      this.numeroConta = numeroConta;
      this.saldo = saldo;
    }
  
    deposito(valor) {
      this.saldo += valor;
    }
  
    saque(valor) {
      if (valor > this.saldo) {
        console.log("Saldo insuficiente.");
      } else {
        this.saldo -= valor;
      }
    }
  
    retornaSaldo() {
      return this.saldo;
    }
  
    retornaNumeroConta() {
      return this.numeroConta;
    }
  }
  
  // Exemplo de uso
  const minhaConta = new ContaBancaria(123456, 1000);
  console.log(`Saldo atual: ${minhaConta.retornaSaldo()}`);
  minhaConta.deposito(500);
  console.log(`Saldo atual: ${minhaConta.retornaSaldo()}`);
  minhaConta.saque(200);
  console.log(`Saldo atual: ${minhaConta.retornaSaldo()}`);
  console.log(`Número da conta: ${minhaConta.retornaNumeroConta()}`);
  