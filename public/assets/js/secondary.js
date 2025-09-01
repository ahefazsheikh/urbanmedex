  // Mapping: medicine name -> page link
   const productMap = {

    // -------------Antiviral&Antibiotics----------------
    "zylomox-500": "Single-Antiviral&Antibiotics/DWX0077.html",
    "zoviclovir-400": "Single-Antiviral&Antibiotics/DWX0100.html",
    "azee-500": "Single-Antiviral&Antibiotics/DWX0115.html",
    "ivermectin 12": "Single-Antiviral&Antibiotics/DWX9506.html",
    "iverheal 3": "Single-Antiviral&Antibiotics/DWX9512.html",
    "iverheal 6": "Single-Antiviral&Antibiotics/DWX9515.html",
    "cephadex 500": "Single-Antiviral&Antibiotics/DWX9829.html",
    "cephadex 250": "Single-Antiviral&Antibiotics/DWX9831.html",
    "tetracycline-500": "Single-Antiviral&Antibiotics/DWX9839.html",
    "restilin": "Single-Antiviral&Antibiotics/DWX9841.html",
    "valclovir-500": "Single-Antiviral&Antibiotics/DWX9843.html",
    "ciprodac 500": "Single-Antiviral&Antibiotics/DWX9852.html",
    "dee-x-1": "Single-Antiviral&Antibiotics/DWX9926.html",
    "azicip 500": "Single-Antiviral&Antibiotics/DWX9957.html",
    "azicip 250": "Single-Antiviral&Antibiotics/DWX9960.html",
    "lquin 500": "Single-Antiviral&Antibiotics/DWX9972.html",
    "augmine 1000": "Single-Antiviral&Antibiotics/DWX9978.html",
    "wormentel 444mg": "Single-Antiviral&Antibiotics/wormentel-444.html",
    "wormentel 222mg": "Single-Antiviral&Antibiotics/wormentel-222.html",
    "wormentel 500mg": "Single-Antiviral&Antibiotics/fenbendazole-500mg.html",
    "wormentel 1000mg": "Single-Antiviral&Antibiotics/1000mg-wormentel.html",


     // ---- Men's Health (Avanafil) ----
     "avana-200": "Single-MH-Avanafil/DWX9206.html",
     "avana-100": "Single-MH-Avanafil/DWX9208.html",

     // ---- Men's Health (Dapoxetine) ----
      "p-force": "Single-MH-Dapoxetine/DWX0017.html",
      "duralast-30": "Single-MH-Dapoxetine/Duralast-30.html",
      "duratia-30": "Single-MH-Dapoxetine/Duratia-30.html",
      "poxet-30": "Single-MH-Dapoxetine/Poxet-30.html",
      "poxet-60": "Single-MH-Dapoxetine/Poxet-60.html",
      "poxet-90": "Single-MH-Dapoxetine/Poxet-90.html",

      // ----------Hair Loss Treatment---------
        "morrf": "Single-Hair Loss Treatment/DWX0130.html",
        "finalo": "Single-Hair Loss Treatment/DWX9352.html",
        "minjuv-10": "Single-Hair Loss Treatment/DWX9738.html",
        "finpecia 1mg": "Single-Hair Loss Treatment/Finpecia.html",
        "dutanol 0.5mg": "Single-Hair Loss Treatment/Dutanol.html",
        "proscalpin 1mg": "Single-Hair Loss Treatment/Proscalpin.html",

      // -----Kamagra All Range ------
          
      "kamagra 100": "Single-Kamagra/DWX0012.html",
      "kamagra 100 chewable tablet": "Single-Kamagra/DWX0021.html",
      "kamagra chewable tablet (strawberry with lemon)": "Single-Kamagra/DWX0024.html",
      "kamagra chewable tablet (4 flavours)": "Single-Kamagra/DWX0027.html",
      "kamagra oral jelly 100": "Single-Kamagra/DWX0166.html",
      "super kamagra": "Single-Kamagra/DWX9675.html",

      // -------Modafinil And Armodafinil ------
        "modaheal 200": "Single-Modafinil and Armodafinil/DWX0127.html",
        "armodafinil tablets artvigil-150": "Single-Modafinil and Armodafinil/DWX9192.html",
        "modvigil 200mg": "Single-Modafinil and Armodafinil/Modvigil-200.html",

        // ------Other Medicines-----
        "telmaheal-80": "Single-Others/DWX9911.html",
        "atarise 25": "Single-Others/DWX9920.html",
        "atarise 10": "Single-Others/DWX9921.html",
        "hctzide-12.5mg": "Single-Others/DWX9924.html",
        "fertogard-25": "Single-Others/DWX9928.html",
        "hyloric 300mg": "Single-Others/DWX9930.html",
        "rosufree 5": "Single-Others/DWX9934.html",
        "silectone-50": "Single-Others/DWX9936.html",
        "cozartan-50": "Single-Others/DWX9938.html",
        "trazocan 25": "Single-Others/DWX9940.html",
        "p-nolol 20": "Single-Others/DWX9942.html",
        "cozartan-25": "Single-Others/DWX9946.html",
        "hctzide-25": "Single-Others/DWX9948.html",
        "p-nolol-40mg": "Single-Others/DWX9950.html",
        "silectone-25": "Single-Others/DWX9952.html",
        "p-nolol-80mg": "Single-Others/DWX9954.html",
        "en-clofert 50": "Single-Others/DWX0073.html",
        "esoheal 20": "Single-Others/DWX0213.html",
        "nalsign": "Single-Others/DWX0215.html",
        "lipvas 20": "Single-Others/DWX0217.html",
        "lipvas 10": "Single-Others/DWX0221.html",
        "melorise-15": "Single-Others/DWX0229.html",
        "melorise-7.5": "Single-Others/DWX0243.html",
        "fertogard-100": "Single-Others/DWX9323.html",
        "fertogard-50": "Single-Others/DWX9324.html",
        "sumitop-100": "Single-Others/DWX9391.html",
        "conjugated estrogens 0.625": "Single-Others/DWX9564.html",
        "tamoxifen citrate": "Single-Others/DWX9607.html",
        "buproban-150": "Single-Others/DWX9796.html",
        "telmaheal 40": "Single-Others/DWX9845.html",
        "unidep sr-300": "Single-Others/DWX9847.html",

        // -----Pain Killer----
        "brufen 200": "Single-PainKiller/DWX0116.html",
        "brufen 600": "Single-PainKiller/DWX0125.html",
        "pain-o-soma": "Single-PainKiller/DWX9481.html",
        "pregarica 75": "Single-PainKiller/DWX9503.html",
        "gabasign-800": "Single-PainKiller/DWX9517.html",
        "gabasign-600": "Single-PainKiller/DWX9521.html",
        "gabasign-300": "Single-PainKiller/DWX9550.html",
        "nervigesic-300": "Single-PainKiller/DWX9710.html",
        "nervigesic-150": "Single-PainKiller/Nervigesic.html",

        // ----best selling----
        "cenforce-100": "Single-MH-Sildenafil/DWX9282.html",
        "vidalista-20": "Single-MH-Tadalafil/DWX9754.html",
        "nervigesic-300": "Single-PainKiller/DWX9710.html",
        "pain-o-soma": "Single-PainKiller/DWX9481.html",
        "ivermectin 12": "Single-Antiviral&Antibiotics/DWX9506.html",
        "sildenafil oral jelly 100": "Single-Kamagra/DWX0166.html",
        "armodafinil tablets artvigil-150": "Single-Modafinil and Armodafinil/DWX9192.html",

        // ---- men's health (sildenafil) ----
        "suhagra-100": "Single-MH-Sildenafil/DWX0007.html",
        "fildena-100": "Single-MH-Sildenafil/DWX0160.html",
        "cenforce-50": "Single-MH-Sildenafil/DWX9259.html",
        "cenforce-100": "Single-MH-Sildenafil/DWX9282.html",
        "cenforce-200": "Single-MH-Sildenafil/DWX9285.html",
        "cenforce-150": "Single-MH-Sildenafil/DWX9288.html",
        "cenforce-fm": "Single-MH-Sildenafil/DWX9291.html",
        "cenforce soft-100": "Single-MH-Sildenafil/DWX9293.html",
        "cenforce-d": "Single-MH-Sildenafil/DWX9297.html",
        "cenforce professional": "Single-MH-Sildenafil/DWX9299.html",
        "cobra-200": "Single-MH-Sildenafil/DWX9305.html",
        "fildena-150": "Single-MH-Sildenafil/DWX9314.html",
        "filagra gel shots": "Single-MH-Sildenafil/DWX9334.html",
        "fildena super active": "Single-MH-Sildenafil/DWX9338.html",
        "femalegra-100": "Single-MH-Sildenafil/DWX9342.html",
        "fildena double-200": "Single-MH-Sildenafil/DWX9345.html",
        "sildalist": "Single-MH-Sildenafil/DWX9378.html",
        
        // ----------skin creams-------
        "skinlite": "Single-SkinCreams/DWX9431.html",
        "isojuv-40": "Single-SkinCreams/DWX9539.html",
        "isojuv-20": "Single-SkinCreams/DWX9543.html",
        "benoquin": "Single-SkinCreams/DWX9804.html",
        "tretiheal 0.05% cream": "Single-SkinCreams/TRE0295_1.html",
        "tretiheal 0.1% cream": "Single-SkinCreams/tretiheal-0-1.html",
        "tretiheal 0.025% cream": "Single-SkinCreams/tretinoin-0-025.html",
        "melanite forte cream": "Single-SkinCreams/Melanite.html",

        // --------sleeping pills-------
        "zopisign 10mg": "Single-SleepingPills/DWX0085.html",
        "zopisign 7.5mg": "Single-SleepingPills/DWX0087.html",
        "zopiclone 7.5mg": "Single-SleepingPills/DWX0095.html",
        "zopiclone 20mg": "Single-SleepingPills/DWX0097.html",
        "zunestar": "Single-SleepingPills/DWX0102.html",
        "hypnite-1": "Single-SleepingPills/DWX9529.html",
        "hypnite-2": "Single-SleepingPills/DWX9535.html",

        // --------steroids-------
        "genotropin-12mg": "Single-Steroids/DWX0112.html",
        "testenate depot-250": "Single-Steroids/DWX9604.html",
        "testoheal": "Single-Steroids/DWX9609.html",
        "testoviron": "Single-Steroids/DWX9618.html",
        "retesto": "Single-Steroids/DWX9627.html",
        "anavar 10mg": "Single-Steroids/anavar10-mg.html",
        "decabol 250mg": "Single-Steroids/Deca_Durabolin.html",
        "winstrol 10mg": "Single-Steroids/Stanozolol-Tablet.html",
        "test e 250mg": "Single-Steroids/test-e-250mg.html",
        "test c 250mg": "Single-Steroids/Testo-sterone.html",
        "trenabol 100mg": "Single-Steroids/trenabol-100.html",

        // ---- men's health (tadalafil) ----
        "tadacip-20": "Single-MH-Tadalafil/DWX0004.html",
        "super tadarise": "Single-MH-Tadalafil/DWX0009.html",
        "vidalista black-80": "Single-MH-Tadalafil/DWX0079.html",
        "vidalista-80": "Single-MH-Tadalafil/DWX0081.html",
        "vidalista professional": "Single-MH-Tadalafil/DWX0084.html",
        "tadarise pro-20": "Single-MH-Tadalafil/DWX0091.html",
        "tadalis-sx 20": "Single-MH-Tadalafil/DWX0164.html",
        "apcalis*-sx oral jelly": "Single-MH-Tadalafil/DWX9238.html",
        "extra super tadarise": "Single-MH-Tadalafil/DWX9350.html",
        "super vidalista": "Single-MH-Tadalafil/DWX9376.html",
        "super tadapox": "Single-MH-Tadalafil/DWX9380.html",
        "tadalista super active": "Single-MH-Tadalafil/DWX9619.html",
        "vidalista-20": "Single-MH-Tadalafil/DWX9754.html",
        "vidalista-40": "Single-MH-Tadalafil/DWX9756.html",
        "vidalista-60": "Single-MH-Tadalafil/DWX9759.html",
        "vidalista-ct": "Single-MH-Tadalafil/DWX9762.html",
        "vidalista-5": "Single-MH-Tadalafil/DWX9768.html",

        // ---- men's health (vardenafil) ----
        "zhewitra-20": "Single-MH-Vardenafil/DWX0093.html",
        "filitra professional": "Single-MH-Vardenafil/DWX9330.html",
        "super vilitra": "Single-MH-Vardenafil/DWX9372.html",
        "vilitra-10": "Single-MH-Vardenafil/DWX9752.html",
        "vilitra-40": "Single-MH-Vardenafil/DWX9771.html",
        "vilitra-60": "Single-MH-Vardenafil/DWX9774.html",
        "vidalista-2.5": "Single-MH-Vardenafil/Vidalista.html",
        "vilitra-20": "Single-MH-Vardenafil/Vilitra.html",

        // -----------weight loss---------
        "orligal 120mg capsules": "Single-WeightLoss/Orligal-120.html",
        "rybelsus 14mg": "Single-WeightLoss/Semaglutide-14.html",
        "rybelsus 3mg": "Single-WeightLoss/Semaglutide-3.html",
        "rybelsus 7mg": "Single-WeightLoss/Semaglutide-7.html",
        "mounjaro kwik pen 10mg": "Single-WeightLoss/Tirzepatide-10.html",
        "mounjaro kwik pen 12.5mg": "Single-WeightLoss/Tirzepatide-12.5.html",
        "mounjaro kwik pen 5mg": "Single-WeightLoss/Tirzepatide-5.html",
        "mounjaro kwik pen 7.5mg": "Single-WeightLoss/Tirzepatide-7.5.html",
        "mounjaro 2.5mg vial": "Single-WeightLoss/Tirzepatide-Injection-2.5-0.5.html",
        "mounjaro 5mg vial": "Single-WeightLoss/Tirzepatide-Injection-5-0.5.html",
        
        


  };
      function redirectSearch() {
        let input = document.getElementById("productSearch").value.toLowerCase().trim();
        if (productMap[input]) {
          window.location.href = productMap[input];
        } else {
          alert("Medicine not found!");
        }
      }

      function showSuggestions(query) {
        const suggestionsBox = document.getElementById("suggestionsBox");
        suggestionsBox.innerHTML = "";

        if (!query) return;

        let matches = Object.keys(productMap).filter(product =>
          product.toLowerCase().includes(query.toLowerCase())
        );

        matches.slice(0, 8).forEach(match => {  // Limit to 8 suggestions
          let div = document.createElement("div");
          div.textContent = match;
          div.onclick = function() {
            document.getElementById("productSearch").value = match;
            suggestionsBox.innerHTML = "";
          };
          suggestionsBox.appendChild(div);
        });
      }

      // Hide suggestions when clicking outside
      document.addEventListener("click", function(e) {
        if (!document.querySelector(".search-container").contains(e.target)) {
          document.getElementById("suggestionsBox").innerHTML = "";
        }
      });

