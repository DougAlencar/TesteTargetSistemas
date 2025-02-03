    
    // Exercício 1: Cálculo da SOMA
    function calcularSoma() {
        let INDICE = 13;
        let SOMA = 0;
        let K = 0;

        while (K < INDICE) {
            K = K + 1;
            SOMA = SOMA + K;
        }

        document.getElementById("resultado-soma").textContent = SOMA;
    }

    // Exercício 2: Verificação de número na sequência de Fibonacci
    function verificarFibonacci() {
        const input = document.getElementById("numero-fibonacci").value;
        const numero = parseFloat(input);

        // Verifica se o número é inteiro e não negativo
        if (!Number.isInteger(numero) || numero < 0) {
            document.getElementById("resultado-fibonacci").textContent =
                `O número ${input} não pertence à sequência de Fibonacci.`;
            return;
        }

        function isFibonacci(n) {
            // Caso especial para 0, que é o primeiro termo da sequência
            if (n === 0) return true;

            let a = 0, b = 1;
            while (b < n) {
                [a, b] = [b, a + b];
            }
            return b === n;
        }

        const resultado = isFibonacci(numero)
            ? `O número ${numero} pertence à sequência de Fibonacci.`
            : `O número ${numero} não pertence à sequência de Fibonacci.`;

        document.getElementById("resultado-fibonacci").textContent = resultado;
    }

    // Exercício 3: Análise de faturamento diário
    function analisarFaturamento() {
        const faturamento = [
            22174.1664, 24537.6698, 26139.6134, 0.0, 0.0, 26742.6612, 0.0, 42889.2258,
            46251.174, 11191.4722, 0.0, 0.0, 3847.4823, 373.7838, 2659.7563, 48924.2448,
            18419.2614, 0.0, 0.0, 35240.1826, 43829.1667, 18235.6852, 4355.0662, 13327.1025, 0.0, 0.0, 25681.8318, 1718.1221, 13220.495, 8414.61
        ];

        // Removendo dias sem faturamento
        const faturamentoFiltrado = faturamento.filter(valor => valor > 0);

        // Calculando menor e maior valor
        const menor = Math.min(...faturamentoFiltrado);
        const maior = Math.max(...faturamentoFiltrado);

        // Calculando a média
        const media = faturamentoFiltrado.reduce((acc, val) => acc + val, 0) / faturamentoFiltrado.length;

        // Contando dias acima da média
        const diasAcimaMedia = faturamentoFiltrado.filter(valor => valor > media).length;

        document.getElementById("menor-faturamento").textContent = menor.toFixed(2);
        document.getElementById("maior-faturamento").textContent = maior.toFixed(2);
        document.getElementById("dias-acima-media").textContent = diasAcimaMedia;
    }

    // Exercício 4: Percentual de representação por estado
    function calcularPercentuais() {
        const faturamentoEstados = {
            SP: 67836.43,
            RJ: 36678.66,
            MG: 29229.88,
            ES: 27165.48,
            Outros: 19849.53
        };

        const total = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);

        const percentuais = Object.entries(faturamentoEstados).map(([estado, valor]) => {
            const percentual = ((valor / total) * 100).toFixed(2);
            return `<li>${estado}: ${percentual}%</li>`;
        }).join("");

        document.getElementById("percentuais-estados").innerHTML = percentuais;
    }

    // Exercício 5: Inversão de uma string
    function inverterString() {
        const string = document.getElementById("string-inversao").value;
        let stringInvertida = "";

        // Inverte a string manualmente
        for (let i = string.length - 1; i >= 0; i--) {
            stringInvertida += string[i];
        }

        document.getElementById("resultado-inversao").textContent = stringInvertida;
    }

    // Inicialização
    window.onload = function () {
        calcularSoma();
        analisarFaturamento();
        calcularPercentuais();
    };