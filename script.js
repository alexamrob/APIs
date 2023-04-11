
if(window.File && window.FileReader && window.FileList) {
    console.log('Todas las APIs soportadas');
    } else {
    alert('La API de FILE no es soportada en este navegador.');
    }

    function handleFileSelect(event) {
        let file = event.target.files[0];

        if (!file.type.match('video.*')) {
            return;
        }

        let reader = new FileReader();

        reader.onload = (function (theFile) {
            return function (e) {                    
                let file = document.createElement('file');
                file.innerHTML = '<video controls id="video" class="thumb" src="' + e.target.result + '" title="'+ escape(theFile.name) + '"/>';

                document.getElementById('video-output').insertBefore(file, null);

                alert("El video se está cargando...");

                document.getElementById('video').addEventListener('canplay', () => {

                    document.getElementById('video-output')

                    rep.style.visibility = "visible";
                    pausa.style.visibility = "visible";
                    subir.style.visibility = "visible";
                    bajar.style.visibility = "visible"; 

                });
            }
        }) (file);

        reader.readAsDataURL(file);
    } 

    document.getElementById('file').addEventListener('change', handleFileSelect, false);