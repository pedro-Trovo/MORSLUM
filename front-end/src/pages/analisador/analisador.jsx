import { useState } from "react";
import Menu from "../../components/menu/menu";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { Message } from "primereact/message";
import { Divider } from "primereact/divider";
import { Chip } from "primereact/chip";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Badge } from "primereact/badge";
import { analisadorService } from "../../service/analisadorService";


export default function Analisador() {
  const [frase, setFrase] = useState("");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function analisar() {
    if (!frase.trim()) {
      setError("Por favor, digite uma frase para analisar");
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const data = await analisadorService.analisarFrase(frase);
      setResultado(data);
    } catch (err) {
      setError("Erro ao analisar a frase. Tente novamente.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const getTabelaTokens = () => {
    if (!resultado?.classificacao) return [];
    
    const { tokens, tags_originais, tags_traduzidas } = resultado.classificacao;
    return tokens.map((token, index) => ({
      token,
      tagOriginal: tags_originais[index],
      tagTraduzida: tags_traduzidas[index]
    }));
  };

  // Agrupar tokens por classe gramatical
  const getTokensPorClasse = () => {
    if (!resultado?.classificacao) return {};
    
    const { tokens, tags_traduzidas } = resultado.classificacao;
    const grupos = {};
    
    tokens.forEach((token, index) => {
      const classe = tags_traduzidas[index];
      if (!grupos[classe]) {
        grupos[classe] = [];
      }
      grupos[classe].push(token);
    });
    
    return grupos;
  };

  const tagTemplate = (rowData) => {
    const severityMap = {
      'Substantivo': 'info',
      'Verbo': 'success',
      'Verbo auxiliar': 'success',
      'Adjetivo': 'warning',
      'Advérbio': 'help',
      'Preposição': 'secondary',
      'Artigo': 'contrast',
      'Determinante': 'contrast',
      'Pronome': 'info',
      'Conjunção': 'danger',
      'Numeral': 'info'
    };

    const severity = severityMap[rowData.tagTraduzida] || 'info';
    
    return (
      <div className="flex align-items-center gap-2">
        <Tag value={rowData.tagTraduzida} severity={severity} />
        <small className="text-gray-500">({rowData.tagOriginal})</small>
      </div>
    );
  };


  const classeColorMap = {
    'Substantivo': 'bg-blue-100 text-blue-700',
    'Verbo': 'bg-green-100 text-green-700',
    'Verbo auxiliar': 'bg-green-100 text-green-700',
    'Adjetivo': 'bg-yellow-100 text-yellow-700',
    'Advérbio': 'bg-purple-100 text-purple-700',
    'Preposição': 'bg-gray-100 text-gray-700',
    'Artigo': 'bg-gray-100 text-gray-700',
    'Determinante': 'bg-gray-100 text-gray-700',
    'Pronome': 'bg-indigo-100 text-indigo-700',
    'Conjunção': 'bg-red-100 text-red-700',
    'Numeral': 'bg-indigo-100 text-indigo-700'
  };

  return (
    <div className="min-h-screen flex flex-column">
      <Menu title="Analisador Morfossintático" />

      <div className="flex justify-content-center mt-5">
        <Card className="w-30rem">
          <div className="flex flex-column gap-3">
            <span className="p-inputgroup flex-nowrap">
              <InputText
                placeholder="Digite uma frase para análise morfossintática"
                value={frase}
                onChange={(e) => setFrase(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && analisar()}
                className="w-full"
              />
              <Button
                label="Analisar"
                icon="pi pi-search"
                loading={loading}
                onClick={analisar}
                disabled={!frase.trim()}
                className="flex-shrink-0"
                style={{ whiteSpace: "nowrap" }}
              />
            </span>
            
            {error && (
              <Message severity="error" text={error} className="w-full" />
            )}
          </div>
        </Card>
      </div>

      {resultado && (
        <div className="flex flex-column align-items-center mt-5 px-4">
          <div className="w-full" style={{ maxWidth: "1200px" }}>
            {/* Card da Frase Original - Ícone branco */}
            <Card className="mb-4">
              <div className="flex align-items-center gap-2">
                <i className="pi pi-quote-right text-2xl text-white bg-green-600 p-2 border-circle"></i>
                <h3 className="m-0 text-xl">{frase}</h3>
              </div>
            </Card>

            {/* Card da Classificação com Tabela - Ícone branco */}
            <Card 
              title={
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-list text-white bg-blue-600 p-2 border-circle text-sm"></i>
                  <span>Classificação Morfossintática</span>
                </span>
              } 
              className="mb-4"
            >
              <DataTable 
                value={getTabelaTokens()} 
                stripedRows 
                responsiveLayout="scroll"
                showGridlines
                size="small"
              >
                <Column field="token" header="Token" sortable style={{ width: '20%' }} />
                <Column 
                  field="tagTraduzida" 
                  header="Classe Gramatical" 
                  body={tagTemplate}
                  sortable
                  style={{ width: '50%' }}
                />
              </DataTable>
            </Card>

            {/* Card da Árvore Sintática - Ícone branco e sem legenda */}
            <Card 
              title={
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-sitemap text-white bg-purple-600 p-2 border-circle text-sm"></i>
                  <span>Árvore de Dependências</span>
                </span>
              } 
              className="mb-4"
            >
              <div className="flex justify-content-center p-3 overflow-auto">
                <div 
                  dangerouslySetInnerHTML={{ __html: resultado.arvore_svg }} 
                  style={{ 
                    display: "inline-block",
                    backgroundColor: "#072912",
                    borderRadius: "8px",
                    padding: "20px"
                  }}
                />
              </div>
            </Card>

            {/* Card de Estatísticas Detalhadas - Ícone branco */}
            <Card 
              title={
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-chart-bar text-white bg-orange-600 p-2 border-circle text-sm"></i>
                  <span>Estatísticas Detalhadas</span>
                </span>
              } 
              className="mb-4"
            >
              {/* Cards de resumo - apenas total de tokens e classes diferentes */}
              <div className="grid mb-4">
                <div className="col-12 md:col-6">
                  <div className="text-center p-3 border-round surface-200">
                    <div className="text-3xl font-bold text-green-600">
                      {resultado.classificacao.tokens.length}
                    </div>
                    <div className="text-gray-600">Total de tokens</div>
                  </div>
                </div>
                <div className="col-12 md:col-6">
                  <div className="text-center p-3 border-round surface-200">
                    <div className="text-3xl font-bold text-blue-600">
                      {new Set(resultado.classificacao.tags_traduzidas).size}
                    </div>
                    <div className="text-gray-600">Classes diferentes</div>
                  </div>
                </div>
              </div>

              {/* Detalhamento por classe gramatical - apenas duas abas */}
              <Accordion multiple>
                {/* Aba de Tokens */}
                <AccordionTab 
                  header={
                    <span>
                      <i className="pi pi-tags mr-2"></i>
                      Todos os tokens
                      <Badge value={resultado.classificacao.tokens.length} className="ml-2" severity="info" />
                    </span>
                  }
                >
                  <div className="flex flex-wrap gap-2">
                    {resultado.classificacao.tokens.map((token, index) => (
                      <Chip 
                        key={index} 
                        label={token} 
                        className="bg-blue-100 text-blue-700"
                      />
                    ))}
                  </div>
                </AccordionTab>

                {/* Aba de Classes Gramaticais */}
                <AccordionTab 
                  header={
                    <span>
                      <i className="pi pi-book mr-2"></i>
                      Classes gramaticais
                      <Badge value={new Set(resultado.classificacao.tags_traduzidas).size} className="ml-2" severity="warning" />
                    </span>
                  }
                >
                  <div className="flex flex-column gap-4">
                    {Object.entries(getTokensPorClasse()).map(([classe, tokens]) => (
                      <div key={classe} className="flex flex-column gap-2">
                        <div className="flex align-items-center gap-2">
                          <Tag value={classe} severity="info" />
                          <span className="text-sm text-gray-500">
                            ({tokens.length} {tokens.length === 1 ? 'token' : 'tokens'})
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 ml-3">
                          {tokens.map((token, idx) => (
                            <Chip 
                              key={idx} 
                              label={token} 
                              className={classeColorMap[classe] || 'bg-gray-100 text-gray-700'}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionTab>
              </Accordion>

              <Divider />

              {/* Resumo centralizado */}
              <div className="text-center text-gray-600 italic">
                <i className="pi pi-info-circle mr-2"></i>
                A frase contém {resultado.classificacao.tokens.length} palavras, 
                distribuídas em {new Set(resultado.classificacao.tags_traduzidas).size} classes gramaticais diferentes.
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}