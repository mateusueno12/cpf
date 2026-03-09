document.getElementById('generateBtn').addEventListener('click', () => {
    const cpf = generateCPF();
    const display = document.getElementById('cpfDisplay');
    display.value = cpf;
    
    // Opcional: Copiar automaticamente para o clipboard
    navigator.clipboard.writeText(cpf);
    const msg = document.getElementById('copyMessage');
    msg.style.display = 'block';
    setTimeout(() => msg.style.display = 'none', 2000);
});

function generateCPF() {
    const random = (n) => Math.floor(Math.random() * n);
    
    let n = [];
    for(let i=0; i<9; i++) n.push(random(10));

    // Cálculo do 1º dígito verificador
    let d1 = n.reduce((acc, curr, i) => acc + (curr * (10 - i)), 0);
    d1 = 11 - (d1 % 11);
    if (d1 >= 10) d1 = 0;

    // Cálculo do 2º dígito verificador
    let d2 = n.reduce((acc, curr, i) => acc + (curr * (11 - i)), 0) + (d1 * 2);
    d2 = 11 - (d2 % 11);
    if (d2 >= 10) d2 = 0;

    return `${n.slice(0,3).join('')}.${n.slice(3,6).join('')}.${n.slice(6,9).join('')}-${d1}${d2}`;
}
