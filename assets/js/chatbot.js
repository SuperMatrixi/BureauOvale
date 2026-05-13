/* ═══════════════════════════════════════════════════════════
   BUREAU OVALE — chatbot.js
   TYNA 🥑 — Smart chatbot- N°1 Chatbot in YEMBA Language, Globally!  
   Topics: Bureau Ovale, Dschang, Avocado Science, Investment
═══════════════════════════════════════════════════════════ */

const TYNA = {
  lang: 'fr',

  /* ─── 40 FAQ DATABASE ──────────────────────────────────── */
  faq: [
    // ── ASSOCIATION (cat: association)
    {
      id: 1, cat: 'association',
      q:  { fr: "Qu'est-ce que Bureau Ovale / APDABA ?", en: "What is Bureau Ovale / APDABA?", ye: "Mbʉ̀ʼ Bureau Ovale yà nɛ̀?" },
      a:  { fr: "Bureau Ovale (APDABA) est une association Loi 1901 fondée le 20 mars 2026, siège à Saint-Witz (Roissy), France. Son nom complet : Association pour la Promotion et le Développement de l'Avocatier Bio en Afrique. Sa mission : développer la culture biologique de l'avocatier sans OGM ni pesticides, avec un projet pilote à Dschang-Mbilé au Cameroun.",
           en: "Bureau Ovale (APDABA) is a French law 1901 non-profit founded on 20 March 2026, headquartered in Saint-Witz (Roissy), France. Full name: Association for the Promotion and Development of Organic Avocado Farming in Africa. Mission: develop GMO-free organic avocado farming, with a pilot project in Dschang-Mbilé, Cameroon.",
           ye: "Bureau Ovale (APDABA) yà mbʉ̀ʼ ghɛ́ ɛ njwèŋ 20 Mars 2026, ɛ Saint-Witz, France. Pfeŋ: kʉ̀ fú avoka bio ɛ Afrique kàŋ OGM, kàŋ pesticides — nkuo Dschang-Mbilé." }
    },
    {
      id: 2, cat: 'association',
      q:  { fr: "Qui sont les membres fondateurs ?", en: "Who are the founding members?", ye: "Bɛ mbʉ̀ʼ tùŋ yà bɛ nɛ̀?" },
      a:  { fr: "Les 6 fondateurs sont : Pr Sosthène Djoumessi (Président, Golden Share), Yves KemKeng (Vice-président, GiC), Chrystelle Djoumessi (Trésorière), Hermann Djoumessi (CTO, IA & Tech), Nelson Djoumessi Bazzard (Administrateur), et Jade Djoumessi (Administratrice).",
           en: "The 6 founders are: Pr Sosthène Djoumessi (President, Golden Share), Yves KemKeng (Vice-President, GiC), Chrystelle Djoumessi (Treasurer), Hermann Djoumessi (CTO, AI & Tech), Nelson Djoumessi Bazzard (Administrator), and Jade Djoumessi (Administrator).",
           ye: "Bɛ mbʉ̀ʼ tùŋ bɛ tso: Pr Sosthène Djoumessi (bɛ ghɛ́), Yves KemKeng, Chrystelle Djoumessi, Hermann Djoumessi, Nelson Djoumessi, Jade Djoumessi." }
    },
    {
      id: 3, cat: 'association',
      q:  { fr: "Où se trouve le siège social ?", en: "Where is the registered office?", ye: "Ndap mbʉ̀ʼ yà nɛ̀?" },
      a:  { fr: "Le siège est à : 7 rue des Sillons de Boulangers, 95470 Saint-Witz (Roissy), France. Un clic Google Maps : https://maps.app.goo.gl/Ts6VZ91yTstbhEXG8",
           en: "The registered office is at: 7 rue des Sillons de Boulangers, 95470 Saint-Witz (Roissy), France. Google Maps: https://maps.app.goo.gl/Ts6VZ91yTstbhEXG8",
           ye: "Ndap mbʉ̀ʼ: 7 rue des Sillons de Boulangers, 95470 Saint-Witz, France." }
    },
    {
      id: 4, cat: 'association',
      q:  { fr: "Comment rejoindre l'association ?", en: "How to join the association?", ye: "Kuo mbʉ̀ʼ yà kuo nɛ̀?" },
      a:  { fr: "Les cotisations sont de 50€/an/membre. Vous pouvez vous inscrire via le formulaire de contact ou en envoyant un email à contact@bureauovale.com. L'adhésion donne accès aux rapports de terrain, aux assemblées générales et aux opportunités d'investissement.",
           en: "Membership dues are €50/year. You can register via the contact form or by emailing contact@bureauovale.com. Membership gives access to field reports, general assemblies, and investment opportunities.",
           ye: "Cotisations: 50€/ŋkar. Email: contact@bureauovale.com. Mfɔʼ: rapports, AG, nkap." }
    },
    {
      id: 5, cat: 'association',
      q:  { fr: "Qu'est-ce que la Golden Share ?", en: "What is the Golden Share?", ye: "Golden Share yà nɛ̀?" },
      a:  { fr: "La Golden Share est une action de préférence fondatrice détenue par le Pr Sosthène Djoumessi. Elle lui confère un droit de veto absolu sur toutes les décisions stratégiques (dilution du capital, cession de terres, dissolution). En cas de faillite, les terres reviennent à lui ou à sa descendance.",
           en: "The Golden Share is a founding preference share held by Pr Sosthène Djoumessi. It grants him absolute veto over all strategic decisions (capital dilution, land sale, dissolution). In case of bankruptcy, land reverts to him or his descendants.",
           ye: "Golden Share yà nkap Pr Djoumessi tòʼ. Bɛ kuo tòʼ tòʼ — veto absolu." }
    },
    {
      id: 6, cat: 'association',
      q:  { fr: "Comment l'association est-elle gouvernée ?", en: "How is the association governed?", ye: "Kʉ̀ tsaŋ mbʉ̀ʼ yà kuo nɛ̀?" },
      a:  { fr: "L'Assemblée Générale se réunit 2 fois par an. Décisions à majorité simple. Le Président représente l'association dans tous les actes civils. Structure : Association Loi 1901 (France) + GiC + Coopérative agricole (Cameroun).",
           en: "The General Assembly meets twice a year. Decisions by simple majority. The President represents the association in all civil acts. Structure: Law 1901 association (France) + GiC + Agricultural cooperative (Cameroon).",
           ye: "AG: 2× / ŋkar. Majorité simple. Pr yà tsaŋ mbʉ̀ʼ." }
    },
    {
      id: 7, cat: 'association',
      q:  { fr: "Quelle est la vision à 10 ans de Bureau Ovale ?", en: "What is Bureau Ovale's 10-year vision?", ye: "Vision 10 ŋkar yà nɛ̀?" },
      a:  { fr: "Horizon 1 (2026-29): Projet Mbilé opérationnel, premières récoltes bio exportées. Horizon 2 (29-32): Usine Douala, gamme huile+cosmétiques. Horizon 3 (32-36): Référence africaine de l'avocat bio 'origine Cameroun' sur les marchés européens.",
           en: "H1 (2026-29): Mbilé project operational, first organic harvests exported. H2 (29-32): Douala processing plant, oil+cosmetics range. H3 (32-36): Africa's reference for 'Cameroon origin' organic avocado in European markets.",
           ye: "H1 (2026-29): Mbilé + export. H2 (29-32): Usine Douala. H3 (32-36): Référence avoka bio Afrique → Europe." }
    },
    {
      id: 8, cat: 'association',
      q:  { fr: "Bureau Ovale est-il conforme au RGPD ?", en: "Is Bureau Ovale GDPR compliant?", ye: "Bureau Ovale yà RGPD kuo?" },
      a:  { fr: "Oui. Bureau Ovale respecte le Règlement Général sur la Protection des Données (UE) 2016/679. Vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Contact DPO : privacy@bureauovale.com.",
           en: "Yes. Bureau Ovale complies with GDPR (EU) 2016/679. You have the right to access, rectify, erase and port your data. DPO contact: privacy@bureauovale.com.",
           ye: "Noo. RGPD (UE) 2016/679 kuo. privacy@bureauovale.com." }
    },

    // ── INVESTMENT (cat: investment)
    {
      id: 9, cat: 'investment',
      q:  { fr: "Comment investir dans Bureau Ovale ?", en: "How to invest in Bureau Ovale?", ye: "Kuo nkap Bureau Ovale yà kuo nɛ̀?" },
      a:  { fr: "Vous pouvez acheter des parts d'avocatiers greffés par bundles de 10 plants. Utilisez notre calculateur OVALE pour estimer vos retours sur 10 ans. Contactez-nous à contact@bureauovale.com pour les modalités. ⚠️ Tout investissement comporte des risques.",
           en: "You can purchase shares in grafted avocado trees in bundles of 10 plants. Use our OVALE calculator to estimate 10-year returns. Contact us at contact@bureauovale.com for details. ⚠️ All investments carry risks.",
           ye: "Nkap: bundles 10 avoka. OVALE calculator yà kuo ROI. contact@bureauovale.com. ⚠️ Bɛ risques." }
    },
    {
      id: 10, cat: 'investment',
      q:  { fr: "Quels sont les revenus projetés ?", en: "What are the projected revenues?", ye: "Mfɔʼ projetés yà nɛ̀?" },
      a:  { fr: "⚠️ Estimations non garanties. 600 plants × 80% commercialisés × 80kg/arbre × 3 000 FCFA/kg = 54 000 000 FCFA (~84 480€) de CA annuel à pleine maturité (années 7-10). OPEX : ~5 000 000 FCFA/an. Profit brut : ~49 000 000 FCFA/an.",
           en: "⚠️ Non-guaranteed estimates. 600 plants × 80% commercialised × 80kg/tree × 3,000 FCFA/kg = 54,000,000 FCFA (~€84,480) annual turnover at full maturity (years 7-10). OPEX: ~5,000,000 FCFA/year. Gross profit: ~49,000,000 FCFA/year.",
           ye: "⚠️ 54 000 000 FCFA/ŋkar (ŋkar 7-10). OPEX: 5M FCFA. Mfɔʼ kàŋ garantie." }
    },
    {
      id: 11, cat: 'investment',
      q:  { fr: "Quelle est la valorisation du projet ?", en: "What is the project valuation?", ye: "Valorisation nkuo yà nɛ̀?" },
      a:  { fr: "⚠️ Estimation interne non auditée. Valorisation Série A : 65 000 000 FCFA (~99 000€). Répartition : Pr Djoumessi 40% + Golden Share, Hermann & Chrystelle 12%, Yves KemKeng 1%, employés 5%, réserve publique 42%.",
           en: "⚠️ Unaudited internal estimate. Series A valuation: 65,000,000 FCFA (~€99,000). Distribution: Pr Djoumessi 40% + Golden Share, Hermann & Chrystelle 12%, Yves KemKeng 1%, employees 5%, public reserve 42%.",
           ye: "⚠️ Valorisation: 65 000 000 FCFA. Pr Djoumessi 40%, réserve 42%." }
    },
    {
      id: 12, cat: 'investment',
      q:  { fr: "Quand les premiers retours sont-ils attendus ?", en: "When are the first returns expected?", ye: "Bɛ mfɔʼ tùŋ ɛ ŋkar nɛ̀?" },
      a:  { fr: "⚠️ Estimations non garanties. Un avocatier greffé commence à produire en année 2-3 et atteint sa pleine maturité en année 4-7. Premières récoltes commercialisables : 2028-2029. CA plein : à partir de 2029-2030.",
           en: "⚠️ Non-guaranteed. A grafted avocado tree begins producing in year 2-3, reaches full maturity in year 4-7. First marketable harvests: 2028-2029. Full revenue: from 2029-2030.",
           ye: "⚠️ Avoka yà fú ŋkar 2-3, mbwì gha ŋkar 4-7. Mfɔʼ tùŋ: 2028-2029." }
    },
    {
      id: 13, cat: 'investment',
      q:  { fr: "Quels sont les principaux risques d'investissement ?", en: "What are the main investment risks?", ye: "Bɛ risques nkap yà nɛ̀?" },
      a:  { fr: "Les principaux risques : 1) Insécurité foncière, 2) Maladies (Phytophthora, anthracnose), 3) Transport et accès marchés, 4) Volatilité devise FCFA/EUR, 5) Risques climatiques. Un bail long terme formalisé et la certification bio atténuent ces risques.",
           en: "Main risks: 1) Land insecurity, 2) Diseases (Phytophthora, anthracnose), 3) Transport & market access, 4) FCFA/EUR currency volatility, 5) Climate risks. A formalised long-term lease and organic certification mitigate these risks.",
           ye: "Risques: terre, maladies, transport, devise, climat. Bail long terme + certification bio." }
    },
    {
      id: 14, cat: 'investment',
      q:  { fr: "L'investissement est-il éthique et ESG ?", en: "Is the investment ethical and ESG?", ye: "Nkap yà ESG?" },
      a:  { fr: "Oui. Le projet est conçu avec une triple dimension ESG : E = agriculture 100% bio sans OGM, agroforesterie. S = emplois locaux, 5% capital aux employés, formation agriculteurs Dschang. G = Golden Share, supervision scientifique, AG bi-annuelle.",
           en: "Yes. The project is designed with triple ESG: E = 100% GMO-free organic farming, agroforestry. S = local jobs, 5% capital to employees, Dschang farmer training. G = Golden Share, scientific oversight, bi-annual assembly.",
           ye: "Noo. ESG: E=bio kàŋ OGM, S=bɛ tsaŋ 5%, G=Golden Share." }
    },
    {
      id: 15, cat: 'investment',
      q:  { fr: "Comment sont sécurisées les terres de Mbilé ?", en: "How is the Mbilé land secured?", ye: "Terres Mbilé yà sɛm̀ nɛ̀?" },
      a:  { fr: "La terre est sécurisée par un bail long terme de 50 ans : Mbilé (1,5 ha à 600 FCFA/m² = 22,5M FCFA) + Twolipé (500m² à 6 000 FCFA/m² = 7,5M FCFA). En cas de dissolution, les terres reviennent au Pr Djoumessi ou à sa descendance.",
           en: "Land secured by 50-year lease: Mbilé (1.5ha at 600 FCFA/m² = 22.5M FCFA) + Twolipé (500m² at 6,000 FCFA/m² = 7.5M FCFA). On dissolution, land reverts to Pr Djoumessi or descendants.",
           ye: "Bail 50 ans: Mbilé 22,5M FCFA + Twolipé 7,5M FCFA. Faillite → terres Pr Djoumessi." }
    },
    {
      id: 16, cat: 'investment',
      q:  { fr: "Quel est le CAPEX du projet Mbilé ?", en: "What is the Mbilé project CAPEX?", ye: "CAPEX nkuo Mbilé yà nɛ̀?" },
      a:  { fr: "⚠️ Estimations indicatives. Plants (600×3 500 FCFA) : 2,1M FCFA. Ingénieurs 18 mois : 1,8M FCFA. Stagiaires : 100k FCFA. La Ruche (construction) : 500k FCFA. Irrigation solaire : 75k–250k FCFA. Conformité juridique : ~500k FCFA. CAPEX total estimé : ~13,16M FCFA.",
           en: "⚠️ Indicative estimates. Plants (600×3,500 FCFA): 2.1M FCFA. Engineers 18 months: 1.8M FCFA. Interns: 100k FCFA. La Ruche (construction): 500k FCFA. Solar irrigation: 75k–250k FCFA. Legal compliance: ~500k FCFA. Total CAPEX: ~13.16M FCFA.",
           ye: "⚠️ CAPEX: avoka 2,1M, ingénieurs 1,8M, La Ruche 500k, eau 75-250k FCFA." }
    },

    // ── SCIENCE (cat: science)
    {
      id: 17, cat: 'science',
      q:  { fr: "Pourquoi les sols de Mbilé sont-ils adaptés à l'avocatier ?", en: "Why are Mbilé soils suited to avocado?", ye: "Sol Mbilé yà ndɛ̂ pʉ̀ avoka pfeŋ?" },
      a:  { fr: "Selon des recherches de l'Université de Dschang : sol limoneux (Andosols), pH 5,0-5,4 (idéal pour l'avocatier : 5-7), matière organique 9-12%, bonne CEC pour la rétention des nutriments. Le drainage naturel prévient le Phytophthora.",
           en: "Per University of Dschang research: loamy soil (Andosols), pH 5.0-5.4 (ideal for avocado: 5-7), 9-12% organic matter, good CEC for nutrient retention. Natural drainage prevents Phytophthora.",
           ye: "Université Dschang: sol limoneux, pH 5-5.4, matière organique 9-12%. Ndɛ̂ pʉ̀ avoka." }
    },
    {
      id: 18, cat: 'science',
      q:  { fr: "Quels sont les nutriments nécessaires à l'avocatier ?", en: "What nutrients does the avocado tree need?", ye: "Avoka yà pfeŋ bɛ nutriments nɛ̀?" },
      a:  { fr: "Un avocatier adulte nécessite par an : 0,5-0,8 kg d'azote (N), 0,19 kg de phosphore (P), 0,75 kg de potassium (K), plus zinc (Zn), calcium (Ca) et bore (B). En bio : fumier de poulet décomposé, compost, cendres végétales, pailles de banane.",
           en: "An adult avocado tree needs per year: 0.5-0.8kg nitrogen (N), 0.19kg phosphorus (P), 0.75kg potassium (K), plus zinc, calcium and boron. Organic sources: decomposed chicken manure, compost, plant ash, banana straw.",
           ye: "N-P-K + zinc, calcium, bore. Bio: fumier poulet, compost, cendres." }
    },
    {
      id: 19, cat: 'science',
      q:  { fr: "Comment prévenir les maladies sans pesticides ?", en: "How to prevent diseases without pesticides?", ye: "Kàŋ pesticides — bɛ maladies yà kuo nɛ̀?" },
      a:  { fr: "2 menaces principales : 1) Phytophthora cinnamomi (pourriture racinaire) → prévenu par buttes surélevées + bon drainage. 2) Anthracnose (Colletotrichum) → contrôlée par taille sanitaire + bouillie bordelaise (autorisée bio). Zéro pesticides chimiques.",
           en: "2 main threats: 1) Phytophthora cinnamomi (root rot) → prevented by raised mounds + good drainage. 2) Anthracnose → controlled by sanitary pruning + Bordeaux mixture (organic-approved). Zero chemical pesticides.",
           ye: "Phytophthora: buttes + drainage. Anthracnose: taille + bouillie bordelaise bio. Kàŋ pesticides chimiques." }
    },
    {
      id: 20, cat: 'science',
      q:  { fr: "Pourquoi choisir des plants greffés ?", en: "Why choose grafted plants?", ye: "Plants greffés pfeŋ?" },
      a:  { fr: "Avantages des greffés vs semis : 1) Production 2-3x plus rapide (2-3 ans vs 7-10 ans), 2) Rendements supérieurs et constants, 3) Meilleure résistance aux maladies selon le porte-greffe, 4) Conformité aux standards d'export européens. Coût : 2 000-3 500 FCFA/plant.",
           en: "Advantages of grafted vs seedlings: 1) 2-3x faster production (2-3 years vs 7-10), 2) Higher and consistent yields, 3) Better disease resistance per rootstock, 4) Compliant with European export standards. Cost: 2,000-3,500 FCFA/plant.",
           ye: "Greffés: fú ŋkar 2-3, mbwì gha, résistance maladies. 2-3,5k FCFA/plant." }
    },
    {
      id: 21, cat: 'science',
      q:  { fr: "Quelles sont les propriétés nutritionnelles de l'avocat bio ?", en: "What are the nutritional properties of organic avocado?", ye: "Avoka bio yà wʉm̀ mɛm̀ nɛ̀?" },
      a:  { fr: "L'avocat bio est riche en : acides gras monoinsaturés (oméga-9, acide oléique), vitamines E, K, B5, B6, C, folates, potassium, fibres et antioxydants (lutéine, zéaxanthine). L'huile vierge a un point de fumée de ~270°C. Propriétés anti-inflammatoires et cardiovasculaires documentées.",
           en: "Organic avocado is rich in: monounsaturated fatty acids (omega-9, oleic acid), vitamins E, K, B5, B6, C, folate, potassium, fibre, and antioxidants (lutein, zeaxanthin). Virgin oil has a ~270°C smoke point. Documented anti-inflammatory and cardiovascular benefits.",
           ye: "Avoka bio: oméga-9, vitamines E-K-C, antioxydants. Huile: 270°C fumée." }
    },
    {
      id: 22, cat: 'science',
      q:  { fr: "Qu'est-ce que la certification CE 2018/848 ?", en: "What is CE 2018/848 certification?", ye: "CE 2018/848 yà nɛ̀?" },
      a:  { fr: "Le règlement CE 2018/848 est le cadre légal européen de la production biologique. Pour vendre 'bio' en France/UE, chaque produit doit être certifié par un organisme agréé : zéro OGM, zéro pesticides de synthèse, engrais organiques uniquement, traçabilité totale. La certification multiplie le prix de vente par 2 à 4.",
           en: "EU Regulation CE 2018/848 is the European legal framework for organic production. To sell as 'organic' in France/EU, each product must be certified by an accredited body: zero GMOs, zero synthetic pesticides, organic fertilisers only, full traceability. Certification typically multiplies sale price by 2 to 4.",
           ye: "CE 2018/848: kàŋ OGM, kàŋ pesticides, traçabilité tòʼ. Prix × 2-4." }
    },
    {
      id: 23, cat: 'science',
      q:  { fr: "Quel est le modèle de rendement sur 10 ans ?", en: "What is the 10-year yield model?", ye: "Modèle mbwì 10 ŋkar yà nɛ̀?" },
      a:  { fr: "Modèle agronomique (avocatier greffé) : An 1-2 = 0 kg. An 3 = 8 kg/arbre. An 4 = 13,3 kg. An 5 = 26,7 kg. An 6 = 40 kg. An 7 = 53,3 kg. An 8 = 66,7 kg. An 9 = 74,7 kg. An 10 = 80 kg. 80% commercialisé.",
           en: "Agronomic model (grafted avocado): Y1-2=0kg. Y3=8kg/tree. Y4=13.3kg. Y5=26.7kg. Y6=40kg. Y7=53.3kg. Y8=66.7kg. Y9=74.7kg. Y10=80kg/tree. 80% commercialised.",
           ye: "Avoka greffé: ŋkar 1-2=0, ŋkar 3=8kg, ŋkar 10=80kg/arbre. 80% tùŋ." }
    },
    {
      id: 24, cat: 'science',
      q:  { fr: "Comment l'agroforesterie améliore-t-elle les sols de Mbilé ?", en: "How does agroforestry improve Mbilé soils?", ye: "Agroforesterie yà kuo sol Mbilé nɛ̀?" },
      a:  { fr: "L'intégration d'arbres d'ombrage (légumineuses fixatrices d'azote) remplit 3 rôles : 1) Fertilité du sol (azote naturel), 2) Stabilisation des falaises de la plaine des Mbô (anti-éboulements), 3) Régulation microclimatique (protection des jeunes avocatiers). Pratique certifiable bio FAO.",
           en: "Shade trees (nitrogen-fixing legumes) serve 3 roles: 1) Soil fertility (natural nitrogen), 2) Slope stabilisation on the Mbô plain (landslide prevention), 3) Microclimate regulation (protecting young avocado trees). FAO-certified organic practice.",
           ye: "Arbres ombrage: azote, stabilisation sols Mbô, microlimat. Bio certifiable FAO." }
    },
    {
      id: 25, cat: 'science',
      q:  { fr: "Quels produits à valeur ajoutée sont prévus ?", en: "What value-added products are planned?", ye: "Bɛ produits bio prévus yà nɛ̀?" },
      a:  { fr: "La gamme prévue : 1) Avocat frais bio (export France/UE via Douala), 2) Huile d'avocat vierge bio (première pression à froid), 3) Cosmétiques bio (crèmes, sérums, savons), 4) Boissons antioxydantes bio, 5) Compléments alimentaires et médicaments (extraits feuilles/noyau, axe de recherche Pr Djoumessi).",
           en: "Planned range: 1) Fresh organic avocado (France/EU export via Douala), 2) Virgin organic avocado oil (cold-pressed), 3) Organic cosmetics (creams, serums, soaps), 4) Organic antioxidant beverages, 5) Dietary supplements and medicines (leaf/pit extracts, Pr Djoumessi's research axis).",
           ye: "Avoka frais, huile vierge, cosmétiques, boissons antioxydantes, médicaments. Pr Djoumessi yà kuo research." }
    },

    // ── DSCHANG / CULTURE (cat: dschang)
    {
      id: 26, cat: 'dschang',
      q:  { fr: "Pourquoi Dschang pour ce projet ?", en: "Why Dschang for this project?", ye: "Pfeŋ Dschang pʉ̀ nkuo si yà nɛ̀?" },
      a:  { fr: "Dschang (Chef-lieu de la Menoua, Région de l'Ouest, Cameroun) est idéal : altitude 1 500m (températures douces), deux saisons des pluies par an, sol limoneux fertile (pH 5-5,4), tradition agricole bamiléké, Université de Dschang (agronomie), accès direct à la route vers Douala (200 km).",
           en: "Dschang (capital of Menoua Division, West Region, Cameroon) is ideal: 1,500m altitude (mild temperatures), two rainy seasons per year, fertile loamy soil (pH 5-5.4), Bamiléké agricultural tradition, University of Dschang (agronomy), direct road access to Douala (200km).",
           ye: "Dschang: 1500m altitude, pluies mǒŋ zò, sol ndɛ̂, Université agronomie, route Douala." }
    },
    {
      id: 27, cat: 'dschang',
      q:  { fr: "Quel est le lien entre Dschang et la culture Bamiléké ?", en: "What is the link between Dschang and Bamiléké culture?", ye: "Dschang nè culture Bamiléké yà nɛ̀?" },
      a:  { fr: "Dschang est le cœur du pays Bamiléké, l'un des groupes ethniques les plus dynamiques du Cameroun. La culture bamiléké est caractérisée par un esprit entrepreneurial fort, un attachement à la terre, la solidarité communautaire (tontines), et des arts traditionnels comme le tissu Ndop (pagnes royaux) et les masques. La Menoua est le berceau de plusieurs chefferies.",
           en: "Dschang is the heart of Bamiléké country, one of Cameroon's most dynamic ethnic groups. Bamiléké culture is characterised by strong entrepreneurial spirit, attachment to the land, community solidarity (tontines), and traditional arts like Ndop cloth (royal prints) and masks. Menoua Division is home to several royal chiefdoms.",
           ye: "Dschang yà ndap Bamiléké — spirit entrepreneurial, terre, tontines, Ndop, bɛ chefferies." }
    },
    {
      id: 28, cat: 'dschang',
      q:  { fr: "Qu'est-ce que l'Université de Dschang ?", en: "What is the University of Dschang?", ye: "Université Dschang yà nɛ̀?" },
      a:  { fr: "L'Université de Dschang (UDs) est l'une des plus grandes universités du Cameroun, fondée en 1977. Elle est reconnue pour ses facultés d'agronomie et de sciences agricoles — un atout majeur pour le projet Bureau Ovale qui y recrute ses ingénieurs agronomes et stagiaires.",
           en: "The University of Dschang (UDs) is one of Cameroon's largest universities, founded in 1977. It is renowned for its agronomy and agricultural science faculties — a key asset for Bureau Ovale, which recruits its agronomist engineers and interns there.",
           ye: "Université Dschang: ghɛ́ 1977. Agronomie kpo. Bureau Ovale yà kuo bɛ ingénieurs." }
    },
    {
      id: 29, cat: 'dschang',
      q:  { fr: "Qu'est-ce que la Menoua ?", en: "What is Menoua Division?", ye: "Menoua yà nɛ̀?" },
      a:  { fr: "La Menoua est un département de la Région de l'Ouest du Cameroun, dont Dschang est le chef-lieu. La Menoua est connue pour ses terres fertiles à haute altitude, ses montagnes (mont Manengouba), sa tradition agricole (café, poivre, maïs, avocats), et ses chefferies traditionnelles bamiléké.",
           en: "Menoua is a division of Cameroon's West Region, with Dschang as its capital. Menoua is known for its fertile high-altitude lands, mountains (Mt Manengouba), agricultural tradition (coffee, pepper, corn, avocados), and Bamiléké traditional chiefdoms.",
           ye: "Menoua: Région Ouest, chef-lieu Dschang. Sol ndɛ̂, café, poivre, avoka, bɛ chefferies." }
    },
    {
      id: 30, cat: 'dschang',
      q:  { fr: "Quelle est l'importance de l'avocat dans la région de Dschang ?", en: "What is avocado's importance in the Dschang region?", ye: "Avoka yà ndɛ̂ ɛ Dschang pfeŋ?" },
      a:  { fr: "L'avocat est culturellement et économiquement central dans la région de l'Ouest camerounais. Les variétés locales (non-Hass) sont prisées sur les marchés de Dschang et Bafoussam. La région bénéficie d'un microclimat idéal (altitude, humidité) et d'une tradition de culture d'avocatiers en jardin familial. Bureau Ovale est le premier projet à industrialiser et certifier bio cette filière.",
           en: "Avocado is culturally and economically central in Cameroon's West Region. Local varieties (non-Hass) are prized in Dschang and Bafoussam markets. The region benefits from an ideal microclimate (altitude, humidity) and a tradition of family-garden avocado cultivation. Bureau Ovale is the first project to industrialise and certify this sector as organic.",
           ye: "Avoka yà ndɛ̂ ɛ Région Ouest. Bɛ variétés locales. Bureau Ovale yà tùŋ nkuo bio tùŋ." }
    },
    {
      id: 31, cat: 'dschang',
      q:  { fr: "Où se trouve exactement Mbilé (Foreke-Dschang) ?", en: "Where exactly is Mbilé (Foreke-Dschang)?", ye: "Mbilé yà nɛ̀ ɛ?" },
      a:  { fr: "Mbilé se trouve dans le quartier Foreke de Dschang, Région de l'Ouest, Cameroun. Coordonnées GPS : 5.4467°N, 10.0492°E. C'est à environ 12 km de Dschang-ville, accessible par la route principale vers Douala. Voir sur Google Maps : https://maps.app.goo.gl/m53vwSyxPwoF9pq6A",
           en: "Mbilé is located in the Foreke neighbourhood of Dschang, West Region, Cameroon. GPS: 5.4467°N, 10.0492°E. About 12 km from Dschang town, accessible via the main road to Douala. Google Maps: https://maps.app.goo.gl/m53vwSyxPwoF9pq6A",
           ye: "Mbilé: Foreke, Dschang. GPS 5.4467°N, 10.0492°E. ~12 km Dschang-ville." }
    },
    {
      id: 32, cat: 'dschang',
      q:  { fr: "Quelle est la place de la diaspora Dschang dans le projet ?", en: "What is the Dschang diaspora's role in the project?", ye: "Diaspora Dschang yà kuo nɛ̀?" },
      a:  { fr: "La diaspora dschangeoise (France, Belgique, USA, UK, Allemagne, Dubaï) est un pilier du financement et du développement commercial. Le projet Bureau Ovale crée un pont entre la diaspora et les terres ancestrales, permettant d'investir dans l'agriculture bio tout en soutenant le développement local.",
           en: "The Dschang diaspora (France, Belgium, USA, UK, Germany, Dubai) is a cornerstone of financing and commercial development. Bureau Ovale creates a bridge between the diaspora and ancestral lands, enabling investment in organic farming while supporting local development.",
           ye: "Diaspora Dschang (France, USA, UK, BE, DE, Dubaï) yà nkap kpo. Bureau Ovale yà bridge diaspora nè Mbilé." }
    },

    // ── AVOCADO GLOBAL (cat: science)
    {
      id: 33, cat: 'science',
      q:  { fr: "Quels sont les 5 premiers exportateurs mondiaux d'avocat ?", en: "Who are the top 5 global avocado exporters?", ye: "TOP 5 exporteurs avoka monde yà nɛ̀?" },
      a:  { fr: "Top 5 exportateurs mondiaux (données 2024 estimées) : 1) 🇲🇽 Mexique (~1,3M tonnes/an), 2) 🇳🇱 Pays-Bas (réexport, ~450k t), 3) 🇵🇪 Pérou (~250k t), 4) 🇨🇱 Chili (~200k t), 5) 🇰🇪 Kenya (~120k t). Le marché mondial est évalué à +15 milliards USD.",
           en: "Top 5 global exporters (est. 2024 data): 1) 🇲🇽 Mexico (~1.3M t/yr), 2) 🇳🇱 Netherlands (re-export, ~450k t), 3) 🇵🇪 Peru (~250k t), 4) 🇨🇱 Chile (~200k t), 5) 🇰🇪 Kenya (~120k t). Global market valued at $15B+.",
           ye: "TOP 5: Mexique 1,3M t, Pays-Bas 450k, Pérou 250k, Chili 200k, Kenya 120k." }
    },
    {
      id: 34, cat: 'science',
      q:  { fr: "Quels sont les principaux producteurs d'avocat en Afrique ?", en: "Who are the main avocado producers in Africa?", ye: "TOP bɛ producteurs avoka Afrique yà nɛ̀?" },
      a:  { fr: "Top producteurs africains : 1) 🇪🇹 Éthiopie (production locale dominante), 2) 🇰🇪 Kenya (export premium Hass vers UK/UE), 3) 🇲🇦 Maroc (devenu N°1 exportateur africain en 2024, ciblant US/UK), 4) 🇿🇦 Afrique du Sud (huile + export premium), 5) 🇹🇿 Tanzanie / 🇺🇬 Ouganda (émergents). Opportunité : Cameroun = vide à combler !",
           en: "Top African producers: 1) 🇪🇹 Ethiopia (dominant local production), 2) 🇰🇪 Kenya (premium Hass export to UK/EU), 3) 🇲🇦 Morocco (Africa's #1 exporter by 2024, targeting US/UK), 4) 🇿🇦 South Africa (oil + premium export), 5) 🇹🇿 Tanzania / 🇺🇬 Uganda (emerging). Opportunity: Cameroon has a gap to fill!",
           ye: "TOP Afrique: Éthiopie, Kenya, Maroc (N°1 2024), Afrique du Sud, Tanzanie/Ouganda. Cameroun = opportunité!" }
    },
    {
      id: 35, cat: 'science',
      q:  { fr: "Quelles grandes marques utilisent l'huile d'avocat en cosmétique ?", en: "Which major brands use avocado oil in cosmetics?", ye: "Bɛ marques cosmétiques avoka yà nɛ̀?" },
      a:  { fr: "Leaders mondiaux du cosmétique à l'huile d'avocat (par capitalisation) : L'Oréal (OR), Unilever (UL), Procter & Gamble (PG), Estée Lauder (EL), Beiersdorf (BEI). Des marques premium comme The Ordinary et Kiehls utilisent intensivement l'huile d'avocat vierge bio dans leurs formulations anti-âge.",
           en: "Global cosmetic avocado oil leaders (by market cap): L'Oréal (OR), Unilever (UL), Procter & Gamble (PG), Estée Lauder (EL), Beiersdorf (BEI). Premium brands like The Ordinary and Kiehl's heavily use virgin organic avocado oil in anti-aging formulations.",
           ye: "TOP cosmétiques: L'Oréal (OR), Unilever (UL), P&G (PG), Estée Lauder (EL), Beiersdorf (BEI)." }
    },
    {
      id: 36, cat: 'science',
      q:  { fr: "Quelle est la différence entre avocat Hass et variétés locales camerounaises ?", en: "What's the difference between Hass avocado and local Cameroonian varieties?", ye: "Hass nè bɛ variétés Cameroun yà tso pfeŋ?" },
      a:  { fr: "Hass (variété californienne) : peau noire, huile riche (15-25%), standard export mondial, prix premium. Variétés locales camerounaises (Fuerte, Lula, locales non-greffées) : peau verte brillante, chair plus ferme, adaptées au climat et au marché local. Bureau Ovale sélectionne des variétés greffées adaptées à l'altitude de Dschang ET conformes aux standards export européens.",
           en: "Hass (Californian variety): dark skin, high oil content (15-25%), world export standard, premium price. Cameroonian local varieties (Fuerte, Lula, local non-grafted): bright green skin, firmer flesh, adapted to local climate and market. Bureau Ovale selects grafted varieties suited to Dschang's altitude AND compliant with European export standards.",
           ye: "Hass: peau noire, export premium. Locales: verte, marché local. Bureau Ovale yà kuo variétés greffées Dschang + export Europe." }
    },
    {
      id: 37, cat: 'science',
      q:  { fr: "Qu'est-ce que le marché de l'huile d'avocat vierge bio ?", en: "What is the market for virgin organic avocado oil?", ye: "Marché huile avoka vierge bio yà nɛ̀?" },
      a:  { fr: "Le marché mondial de l'huile d'avocat extra vierge est évalué à 1,2 milliard USD en 2024 et devrait atteindre 2,5 milliards USD d'ici 2030. Croissance annuelle : +12% CAGR. Principaux segments : alimentaire (60%), cosmétique (30%), pharmaceutique (10%). L'huile bio premium commande une prime de prix de 40-60%.",
           en: "The global extra virgin avocado oil market was valued at $1.2B in 2024 and is projected to reach $2.5B by 2030. Annual growth: +12% CAGR. Main segments: food (60%), cosmetics (30%), pharmaceuticals (10%). Premium organic oil commands a 40-60% price premium.",
           ye: "Marché huile bio: 1,2Md USD 2024 → 2,5Md 2030. +12% CAGR. Bio: +40-60% prix." }
    },
    {
      id: 38, cat: 'investment',
      q:  { fr: "Comment fonctionnerait l'usine de transformation à Douala ?", en: "How would the Douala processing plant work?", ye: "Usine Douala yà kuo nɛ̀?" },
      a:  { fr: "Prévue à Douala (proximité du port), l'usine transformerait les avocats bio de Mbilé en : huile vierge (pression à froid), cosmétiques (crèmes, sérums), boissons (jus, smoothies), compléments (extraits). La localisation portuaire facilite l'export direct vers la France et l'UE. Ce projet représente l'horizon 2029-2032 de Bureau Ovale.",
           en: "Planned in Douala (near the port), the plant would process organic avocados from Mbilé into: virgin oil (cold-pressed), cosmetics (creams, serums), beverages (juices, smoothies), supplements (extracts). Port location facilitates direct export to France and EU. This project represents Bureau Ovale's 2029-2032 horizon.",
           ye: "Usine Douala (port): huile, cosmétiques, boissons, compléments. Export France/UE. Horizon 2029-2032." }
    },
    {
      id: 39, cat: 'science',
      q:  { fr: "Comment l'IA est-elle intégrée dans le projet ?", en: "How is AI integrated into the project?", ye: "IA yà kuo nɛ̀ ɛ nkuo?" },
      a:  { fr: "Sous la direction de Hermann Djoumessi (CTO), l'IA intervient à 4 niveaux : 1) Diagnostic agronomique par images satellite/drone, 2) Optimisation irrigation/fertilisation par modèles prédictifs, 3) Traçabilité automatisée (blockchain), 4) Intelligence commerciale (prix marchés, canaux export). Vision : MBiLÉ OVALE'26 = modèle d'Agriculture 4.0 en Afrique.",
           en: "Under Hermann Djoumessi (CTO), AI operates at 4 levels: 1) Agronomic diagnosis via satellite/drone imagery, 2) Irrigation/fertilisation optimisation via predictive models, 3) Automated traceability (blockchain), 4) Commercial intelligence (market prices, export channels). Vision: MBiLÉ OVALE'26 = Africa's Agriculture 4.0 model.",
           ye: "Hermann CTO: satellite/drone diagnostic, IA irrigation, blockchain, prix marchés. Agriculture 4.0 Afrique." }
    },
    {
      id: 40, cat: 'dschang',
      q:  { fr: "Comment Bureau Ovale contribue-t-il à l'emploi local à Dschang ?", en: "How does Bureau Ovale contribute to local employment in Dschang?", ye: "Bureau Ovale yà kuo bɛ tsaŋ Dschang nɛ̀?" },
      a:  { fr: "Bureau Ovale emploie : 2 ingénieurs agronomes (50 000 FCFA/mois chacun), 2 stagiaires de l'Université de Dschang, 1 contremaître + 2 maçons pour La Ruche, plus des ouvriers saisonniers pour les récoltes. 5% du capital est réservé aux employés. À pleine production : modèle réplicable ciblant 50+ emplois directs dans la région.",
           en: "Bureau Ovale employs: 2 agronomist engineers (50,000 FCFA/month each), 2 University of Dschang interns, 1 foreman + 2 masons for La Ruche, plus seasonal harvest workers. 5% of capital reserved for employees. At full production: replicable model targeting 50+ direct jobs in the region.",
           ye: "2 ingénieurs, 2 stagiaires UDs, contremaître + maçons. 5% capital bɛ tsaŋ. Vision: 50+ bɛ tsaŋ." }
    }
  ],

  /* ─── GREETING MESSAGES ────────────────────────────────── */
  greetings: {
    fr: "Bonjour ! 👋 Je suis **TYNA**, votre assistante Bureau Ovale 🥑\n\nJe connais tout sur notre coopérative bio à Mbilé-Dschang, l'investissement éthique dans l'avocatier, la culture de Dschang et le marché mondial de l'avocat.\n\nQue puis-je faire pour vous ?",
    en: "Hello! 👋 I'm **TYNA**, your Bureau Ovale assistant 🥑\n\nI know everything about our organic cooperative at Mbilé-Dschang, ethical avocado investment, Dschang culture, and the global avocado market.\n\nHow can I help you?",
    ye: "Mbɛ̀ ! 👋 Mi yà **TYNA**, assistante Bureau Ovale 🥑\n\nMi kuo tòʼ: mbʉ̀ʼ bio Mbilé-Dschang, nkap avoka, culture Dschang, nè marché avoka monde.\n\nMi lɔ̂ kuo nɛ̀?"
  },

  /* ─── SUGGESTED QUESTIONS ─────────────────────────────── */
  suggestions: {
    fr: ["Qu'est-ce que Bureau Ovale ?", "Comment investir ?", "Revenus projetés ?", "Pourquoi Dschang ?", "Marché mondial avocat"],
    en: ["What is Bureau Ovale?", "How to invest?", "Projected revenues?", "Why Dschang?", "Global avocado market"],
    ye: ["Bureau Ovale yà nɛ̀?", "Kuo nkap?", "Mfɔʼ projetés?", "Dschang pfeŋ?", "Marché avocat monde"]
  },

  /* ─── FUZZY MATCH ─────────────────────────────────────── */
  findAnswer(query) {
    const q = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    // Score each FAQ
    let best = null, bestScore = 0;
    for (const f of this.faq) {
      const question = (f.q[this.lang] || f.q.fr).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const answer = (f.a[this.lang] || f.a.fr).toLowerCase();
      // Keyword scoring
      const words = q.split(/\s+/).filter(w => w.length > 2);
      let score = 0;
      words.forEach(w => {
        if (question.includes(w)) score += 3;
        if (answer.includes(w)) score += 1;
      });
      if (score > bestScore) { bestScore = score; best = f; }
    }
    if (bestScore >= 2 && best) return best.a[this.lang] || best.a.fr;
    return null;
  },

  fallback: {
    fr: "Je ne suis pas sûre de comprendre votre question. Pouvez-vous la reformuler ? Vous pouvez aussi cliquer sur une question suggérée, ou me poser des questions sur Bureau Ovale, Dschang, l'investissement ou l'avocat bio 🥑",
    en: "I'm not quite sure I understand your question. Could you rephrase it? You can also click a suggested question, or ask me about Bureau Ovale, Dschang, investment, or organic avocado 🥑",
    ye: "Mi kàŋ tòʼ tambama si. Kuo tambama ndɛ̂? Bureau Ovale, Dschang, nkap, avoka bio 🥑"
  }
};

/* ─── EXPORT for use in main.js ───────────────────────────── */
if (typeof module !== 'undefined') module.exports = TYNA;
