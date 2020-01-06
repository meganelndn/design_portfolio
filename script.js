/*TEXT BOUNCE*/

const BASICWEB = document.querySelector("#basicweb");
console.log (BASICWEB);
BASICWEB.addEventListener("mouseover",bounceText);

const BASICANIMATION = document.querySelector("#basicanimation");
console.log (BASICANIMATION);
BASICANIMATION.addEventListener("mouseover",bounceTextAnimation);

const BASICCONTENT = document.querySelector("#basiccontent");
console.log(BASICCONTENT);
BASICCONTENT.addEventListener("mouseover",bounceTextContent);

const BASICUX = document.querySelector("#basicux");
console.log(BASICUX);
BASICUX.addEventListener("mouseover",bounceTextUx);

/*WEB BOUNCE*/

function bounceText (){
    const B = document.querySelector(".b");
    B.classList.add("bounce");
    console.log(B);

    const A = document.querySelector(".a");
    A.classList.add("bounce");
    console.log(A);

    const S = document.querySelector(".s");
    S.classList.add("bounce");
    console.log(S);

    const I = document.querySelector(".i");
    I.classList.add("bounce");
    console.log(I);

    const C = document.querySelector(".c");
    C.classList.add("bounce");
    console.log(C);

    const W = document.querySelector(".w");
    W.classList.add("bounce");
    console.log(W);

    const E = document.querySelector(".e");
    E.classList.add("bounce");
    console.log(E);

    const bTwo = document.querySelector(".btwo");
    bTwo.classList.add("bounce");
    console.log(bTWO);
}

BASICWEB.addEventListener("mouseout",bounceTextOff);

function bounceTextOff () {
    const B = document.querySelector(".b");
    B.classList.remove("bounce");
    console.log(B);

    const A = document.querySelector(".a");
    A.classList.remove("bounce");
    console.log(A);

    const S = document.querySelector(".s");
    S.classList.remove("bounce");
    console.log(S);

    const I = document.querySelector(".i");
    I.classList.remove("bounce");
    console.log(I);

    const C = document.querySelector(".c");
    C.classList.remove("bounce");
    console.log(C);

    const W = document.querySelector(".w");
    W.classList.remove("bounce");
    console.log(W);

    const E = document.querySelector(".e");
    E.classList.remove("bounce");
    console.log(E);

    const bTwo = document.querySelector(".btwo");
    bTwo.classList.remove("bounce");
    console.log(bTwo);
}

/*ANIMATION BOUNCE*/

function bounceTextAnimation (){
    const BAN = document.querySelector(".ban");
    BAN.classList.add("bounce");
    console.log(BAN);

    const AAN = document.querySelector(".aan");
    AAN.classList.add("bounce");
    console.log(AAN);

    const SAN = document.querySelector(".san");
    SAN.classList.add("bounce");
    console.log(SAN);

    const IAN = document.querySelector(".ian");
    IAN.classList.add("bounce");
    console.log(IAN);

    const CAN = document.querySelector(".can");
    CAN.classList.add("bounce");
    console.log(CAN);

    const ANAN = document.querySelector(".anan");
    ANAN.classList.add("bounce");
    console.log(ANAN);

    const N = document.querySelector(".n");
    N.classList.add("bounce");
    console.log(N);

    const IANAN = document.querySelector(".ianan");
    IANAN.classList.add("bounce");
    console.log(IANAN);

    const M = document.querySelector(".m");
    M.classList.add("bounce");
    console.log(M);

    const ANANAN = document.querySelector(".ananan");
    ANANAN.classList.add("bounce");
    console.log(ANANAN);

    const T = document.querySelector(".t");
    T.classList.add("bounce");
    console.log(T);

    const IANANAN = document.querySelector(".iananan");
    IANANAN.classList.add("bounce");
    console.log(IANANAN);

    const O = document.querySelector(".o");
    O.classList.add("bounce");
    console.log(O);

    const NA = document.querySelector(".na");
    NA.classList.add("bounce");
    console.log(NA);
}

BASICANIMATION.addEventListener("mouseout",bounceTextOffAn);

function bounceTextOffAn () {
      const BAN = document.querySelector(".ban");
    BAN.classList.remove("bounce");
    console.log(BAN);

    const AAN = document.querySelector(".aan");
    AAN.classList.remove("bounce");
    console.log(AAN);

    const SAN = document.querySelector(".san");
    SAN.classList.remove("bounce");
    console.log(SAN);

    const IAN = document.querySelector(".ian");
    IAN.classList.remove("bounce");
    console.log(IAN);

    const CAN = document.querySelector(".can");
    CAN.classList.remove("bounce");
    console.log(CAN);

    const ANAN = document.querySelector(".anan");
    ANAN.classList.remove("bounce");
    console.log(ANAN);

    const N = document.querySelector(".n");
    N.classList.remove("bounce");
    console.log(N);

    const IANAN = document.querySelector(".ianan");
    IANAN.classList.remove("bounce");
    console.log(IANAN);

    const M = document.querySelector(".m");
    M.classList.remove("bounce");
    console.log(M);

    const ANANAN = document.querySelector(".ananan");
    ANANAN.classList.remove("bounce");
    console.log(ANANAN);

    const T = document.querySelector(".t");
    T.classList.remove("bounce");
    console.log(T);

    const IANANAN = document.querySelector(".iananan");
    IANANAN.classList.remove("bounce");
    console.log(IANANAN);

    const O = document.querySelector(".o");
    O.classList.remove("bounce");
    console.log(O);

    const NA = document.querySelector(".na");
    NA.classList.remove("bounce");
    console.log(NA);
}

/* CONTENT BOUNCE*/

function bounceTextContent (){
    const BCO = document.querySelector(".bco");
    BCO.classList.add("bounce");
    console.log(BCO);

    const ACO = document.querySelector(".aco");
    ACO.classList.add("bounce");
    console.log(ACO);

    const SCO = document.querySelector(".sco");
    SCO.classList.add("bounce");
    console.log(SCO);

    const ICO = document.querySelector(".ico");
    ICO.classList.add("bounce");
    console.log(ICO);

    const CCO = document.querySelector(".cco");
    CCO.classList.add("bounce");
    console.log(CCO);

    const CCOCO = document.querySelector(".ccoco");
    CCOCO.classList.add("bounce");
    console.log(CCOCO);

    const OCO = document.querySelector(".oco");
    OCO.classList.add("bounce");
    console.log(OCO);

    const NCO = document.querySelector(".nco");
    NCO.classList.add("bounce");
    console.log(NCO);

    const TCO = document.querySelector(".tco");
    TCO.classList.add("bounce");
    console.log(TCO);

    const ECO = document.querySelector(".eco");
    ECO.classList.add("bounce");
    console.log(ECO);

    const NCOCO = document.querySelector(".ncoco");
    NCOCO.classList.add("bounce");
    console.log(NCOCO);

    const TCOCO = document.querySelector(".tcoco");
    TCOCO.classList.add("bounce");
    console.log(TCOCO);
}

BASICCONTENT.addEventListener("mouseout",bounceTextOffCo);

function bounceTextOffCo() {
    const BCO = document.querySelector(".bco");
    BCO.classList.remove("bounce");
    console.log(BCO);

    const ACO = document.querySelector(".aco");
    ACO.classList.remove("bounce");
    console.log(ACO);

    const SCO = document.querySelector(".sco");
    SCO.classList.remove("bounce");
    console.log(SCO);

    const ICO = document.querySelector(".ico");
    ICO.classList.remove("bounce");
    console.log(ICO);

    const CCO = document.querySelector(".cco");
    CCO.classList.remove("bounce");
    console.log(CCO);

    const CCOCO = document.querySelector(".ccoco");
    CCOCO.classList.remove("bounce");
    console.log(CCOCO);

    const OCO = document.querySelector(".oco");
    OCO.classList.remove("bounce");
    console.log(OCO);

    const NCO = document.querySelector(".nco");
    NCO.classList.remove("bounce");
    console.log(NCO);

    const TCO = document.querySelector(".tco");
    TCO.classList.remove("bounce");
    console.log(TCO);

    const ECO = document.querySelector(".eco");
    ECO.classList.remove("bounce");
    console.log(ECO);

    const NCOCO = document.querySelector(".ncoco");
    NCOCO.classList.remove("bounce");
    console.log(NCOCO);

    const TCOCO = document.querySelector(".tcoco");
    TCOCO.classList.remove("bounce");
    console.log(TCOCO);
}

/*UX BOUNCE*/

function bounceTextUx () {
    const BUX = document.querySelector(".bux");
    BUX.classList.add("bounce");
    console.log(BUX);

    const AUX = document.querySelector(".aux");
    AUX.classList.add("bounce");
    console.log(AUX);

    const SUX = document.querySelector(".sux");
    SUX.classList.add("bounce");
    console.log(SUX);

    const IUX = document.querySelector(".iux");
    IUX.classList.add("bounce");
    console.log(IUX);

    const CUX = document.querySelector(".cux");
    CUX.classList.add("bounce");
    console.log(CUX);

    const UX = document.querySelector(".ux");
    UX.classList.add("bounce");
    console.log(UX);

    const XUX = document.querySelector(".xux");
    XUX.classList.add("bounce");
    console.log(XUX);
}

BASICUX.addEventListener("mouseout",bounceTextOffUx);

function bounceTextOffUx (){
    const BUX = document.querySelector(".bux");
    BUX.classList.remove("bounce");
    console.log(BUX);

    const AUX = document.querySelector(".aux");
    AUX.classList.remove("bounce");
    console.log(AUX);

    const SUX = document.querySelector(".sux");
    SUX.classList.remove("bounce");
    console.log(SUX);

    const IUX = document.querySelector(".iux");
    IUX.classList.remove("bounce");
    console.log(IUX);

    const CUX = document.querySelector(".cux");
    CUX.classList.remove("bounce");
    console.log(CUX);

    const UX = document.querySelector(".ux");
    UX.classList.remove("bounce");
    console.log(UX);

    const XUX = document.querySelector(".xux");
    XUX.classList.remove("bounce");
    console.log(XUX);
}


/* MEDIA QUERIES*/
function myFunction(x) {
    x.classList.toggle("change");
}

function toggleSidebar(ref) {
    ref.classList.toggle('active');
    document.getElementById("sidebar").classList.toggle('active');
}
