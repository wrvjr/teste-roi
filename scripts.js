// Scripts para o site de ROI MeetRox para Edenred

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar o gráfico de comparação
    initComparisonChart();
    
    // Adicionar animações de scroll
    initScrollAnimations();
    
    // Inicializar tooltips
    initTooltips();
});

// Função para inicializar o gráfico de comparação
function initComparisonChart() {
    const ctx = document.getElementById('comparisonChart').getContext('2d');
    
    // Dados do gráfico
    const ganhoMensal = 53508.27;
    const ganhoAnual = 642099.24;
    const investimentoMensal = 7315.00;
    const investimentoAnual = 93780.00;
    
    // Criar o gráfico
    const comparisonChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mensal', 'Anual'],
            datasets: [
                {
                    label: 'Ganho Total',
                    data: [ganhoMensal, ganhoAnual],
                    backgroundColor: 'rgba(106, 17, 203, 0.7)',
                    borderColor: 'rgba(106, 17, 203, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Investimento',
                    data: [investimentoMensal, investimentoAnual],
                    backgroundColor: 'rgba(0, 166, 81, 0.7)',
                    borderColor: 'rgba(0, 166, 81, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + value.toLocaleString('pt-BR');
                        }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Comparativo: Ganho vs. Investimento',
                    font: {
                        size: 16
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += 'R$ ' + context.parsed.y.toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                });
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

// Função para inicializar animações de scroll
function initScrollAnimations() {
    // Selecionar todos os elementos que queremos animar
    const elements = document.querySelectorAll('.card, .context-item, .pain-item, .benefit-item, .investment-item, .conclusion-container, .roi-calculation');
    
    // Configurar o observador de interseção
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Adicionar classe inicial e observar cada elemento
    elements.forEach(element => {
        element.classList.add('pre-animate');
        observer.observe(element);
    });
}

// Função para inicializar tooltips
function initTooltips() {
    // Esta função seria implementada se estivéssemos usando uma biblioteca de tooltips
    // Como estamos mantendo o site simples, vamos deixar isso como um placeholder
    console.log('Tooltips inicializados');
}

// Adicionar estilos CSS para animações
const style = document.createElement('style');
style.textContent = `
    .pre-animate {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
