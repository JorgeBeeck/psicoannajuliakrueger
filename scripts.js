/**
 * ================================================================
 * SCRIPT PRINCIPAL - Animações e Interatividade
 * ================================================================
 * 
 * Arquivo: scripts.js
 * Função: Adiciona animações suaves quando elementos entram na viewport
 * Navegadores: Todos os modernos (Chrome, Firefox, Safari, Edge)
 * 
 */

(function () {
    /**
     * IntersectionObserver: monitora quando elementos entram/saem da viewport
     * Útil para lazy-loading, analytics, animações
     */
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                // Quando o elemento entra na viewport
                if (entry.isIntersecting) {
                    // Adiciona classe 'visible' que ativa a animação CSS
                    entry.target.classList.add('visible');
                    // Para de observar este elemento (performance)
                    io.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12, // Ativa quando 12% do elemento está visível
        }
    );

    /**
     * Observa todos os elementos com classe 'fade-up'
     * Ver HTML para ver quais elementos têm essa classe
     */
    document.querySelectorAll('.fade-up').forEach((el) => io.observe(el));
})();

/**
 * ================================================================
 * NOTAS PARA CUSTOMIZAÇÃO
 * ================================================================
 * 
 * 1. ADICIONAR MAIS ANIMAÇÕES:
 *    - Adicione classe CSS nova em styles.css
 *    - Use IntersectionObserver para triggar
 *
 * 2. RASTREAMENTO (Analytics):
 *    - Cole código do Google Analytics aqui
 *    - Ou adicione evento de clique no botão WhatsApp
 *
 * 3. FORMULÁRIOS:
 *    - Se adicionar formulário, valide aqui
 *    - Use FormData API para envio
 *
 */
