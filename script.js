4.72 KiB
/* =====================================================
   NAVEGAÇÃO E EXIBIÇÃO DE CATEGORIAS (mapa.js)
===================================================== */

const MapaApp = {
    abrirCategoria: function(nomeCategoria) {
        const conteiner = document.getElementById('lista');
        if (!conteiner) return;

        conteiner.style.display = "block";

        const palavrasFiltradas = DICIONARIO.filter(
            item => item.categoria.toLowerCase() === nomeCategoria.toLowerCase()
        );

        let htmlContent = `
            <div style="margin-bottom: 20px;">
                <button class="voltar" onclick="MapaApp.voltarInicio()" style="padding: 10px 18px; cursor: pointer; border-radius: 8px; border: none; background-color: #5be0ac; color: #112822; font-weight: bold; font-size: 0.95rem;">← Voltar às Categorias</button>
                <h2 style="margin-top: 15px; color: #5be0ac; font-size: 26px; text-transform: uppercase;">
                    ${nomeCategoria}
                </h2>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px;">
        `;

        if (palavrasFiltradas.length === 0) {
            htmlContent += `
                <p style="opacity: 0.8; font-style: italic;">
                    Nenhuma palavra cadastrada nesta categoria ainda.
                </p>
            `;
        } else {
            palavrasFiltradas.forEach(item => {
                // Monta a lista de exemplos e traduções
                let frasesHtml = '';
                if (item.exemplos && item.exemplos.length > 0) {
                    item.exemplos.forEach((ex, idx) => {
                        const tr = item.traducao && item.traducao[idx] ? item.traducao[idx] : '';
                        frasesHtml += `
                            <div style="margin-bottom: 6px;">
                                <p style="font-style: italic; color: #ffffff;">"${ex}"</p>
                                <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.9rem;">👉 ${tr}</p>
                            </div>
                        `;
                    });
                }

                htmlContent += `
                    <div class="card-pronuncia" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(91, 224, 172, 0.2); padding: 18px; border-radius: 10px;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <h3 style="color: #ffffff; font-size: 22px;">${item.palavra}</h3>
                            ${item.tipo ? `<span style="font-size: 0.75rem; background: rgba(91, 224, 172, 0.2); color: #5be0ac; padding: 2px 8px; border-radius: 12px; text-transform: uppercase;">${item.tipo}</span>` : ''}
                        </div>
                        
                        <p style="font-size: 1rem; margin-top: 6px; color: #5be0ac;"><strong>Significado:</strong> ${item.significado}</p>

                        ${item.sentido_de ? `<p style="font-size: 0.85rem; opacity: 0.8; margin-top: 4px;"><em>${item.sentido_de}</em></p>` : ''}

                        ${item.imagem ? `<img src="${item.imagem}" alt="${item.palavra}" style="width: 100%; max-width: 180px; height: auto; margin: 12px 0; border-radius: 8px;" onerror="this.style.display='none'">` : ''}

                        ${item.audio ? `
                            <div style="margin: 10px 0;">
                                <button onclick="new Audio('${item.audio}').play()" style="background: #5be0ac; color: #112822; border: none; padding: 6px 12px; border-radius: 15px; font-weight: bold; cursor: pointer; font-size: 0.85rem;">
                                    🔊 Ouvir Pronúncia
                                </button>
                            </div>
                        ` : ''}

                        ${frasesHtml ? `
                            <div style="margin-top: 12px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.1);">
                                <span style="font-size: 11px; color: #5be0ac; text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px;">Exemplos de uso</span>
                                <div style="margin-top: 6px;">${frasesHtml}</div>
                            </div>
                        ` : ''}
                    </div>
                `;
            });
        }

        htmlContent += `</div>`;
        conteiner.innerHTML = htmlContent;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    voltarInicio: function() {
        location.reload();
    }
};

window.mostrarCategoria = function(nome) {
    MapaApp.abrirCategoria(nome);
};
