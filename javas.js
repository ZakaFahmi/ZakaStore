function checkFill() {
    var i, allowed = "0123456789";
    var nama = document.mbuh.nama.value; 
    var email = document.mbuh.email.value; 
    var subjek = document.mbuh.subjek.value; 
    var komen = document.mbuh.komen.value; 
    var telepon = document.mbuh.telepon.value; 

    /*VALIDASI KOSONG*/
    if (nama == "" ) {
        window.alert ("Masukkan nama! Jangan dikosongi dong:)");
        document.mbuh.nama.focus();
        return false;
        }

        /*VALIDASI NUMERIK*/
        for (z=0; z < nama.length; z++) {
            if (allowed.indexOf(nama.charAt(z)) != -1) {
                window.alert ("Masukkan huruf bukan angka!");
                document.mbuh.nama.focus();
                return false;
            }
            }

    /*VALIDASI KOSONG*/        
    if (email == ""){
        window.alert ("Masukkan Email! Jangan dikosongi dong:)");
        document.mbuh.email.focus();
        return false;
        }
    if (subjek == ""){
        window.alert ("Masukkan Subjek! Jangan dikosongi dong:)");
        document.mbuh.subjek.focus();
        return false;
        }
    if (komen == ""){
        window.alert ("Masukkan Coment! Jangan dikosongi dong:)");
        document.mbuh.komen.focus();
        return false;
        }
    if (telepon == ""){
        window.alert ("Masukkan nomor telepon! Jangan dikosongi dong:)");
        document.mbuh.telepon.focus();
        return false;
        }

    /*VALIDASI ALFABET DAN TELEPON*/
    for (i=0; i < telepon.length; i++) {
        if (allowed.indexOf(telepon.charAt(i)) == -1) {
            window.alert ("Masukkan angka bukan huruf!");
            document.mbuh.telepon.focus();
            return false;
        }
        }
    
        
    /*else{
        return true;
    }*/
} 