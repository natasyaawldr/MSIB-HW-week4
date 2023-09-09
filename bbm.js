let kendaraan = "motor"; 

if (kendaraan === "plat kuning" || kendaraan === "motor") {
    console.log("BBM subsidi");
} else if (kendaraan === "mobil") {
    let kapasitasCC = 1600; 
    if (kapasitasCC < 1500) {
        console.log("PERTAMAX");
    } else {
        console.log("PERTAMAX Turbo");
    }
} else {
    console.log("Jenis kendaraan tidak dikenali");
}