// var form = `<form>
//                 <div class="form-group">
//                     <label>Lokasi</label>
//                     <Select class="form-control" name="lokasiId" id="lokasiId" onchange="getLokasi()">
//                         <option value="" disabled selected>-- Select Option --</option>
//                     </Select>
//                 </div>
//                 <div class="form-group">
//                     <label>Nama Dokter</label>
//                     <input type="text" class="form-control" id="namaDokter">
//                 </div>
//                 <div class="form-group">
//                     <label>Spesialisasi/Sub-spesialisasi</label>
//                     <Select class="form-control" name="specializationId" id="specializationId">
//                         <option value="" disabled selected>-- Select Option --</option>
//                     </Select>
//                 </div>
//                 <div class="form-group">
//                     <label>Tindakan Medis</label>
//                     <Select class="form-control" name="treatmentId" id="treatmentId">
//                         <option value="" disabled selected>-- Select Option --</option>
//                     </Select>
//                 </div>
//             </form>`;

$(document).ready(function () {
    fetchDataDokter();
    // $('#hasil')
})

function fetchDataDokter() {
    $.ajax({
        url: "http://localhost:8081/api/doctor",
        type: "GET",
        contentType: "application/json",
        success: function (resData) {
            console.log(resData);

            var text = "";
            for (var i = 0; i < resData.data.length; i++) {
                if (i % 2 == 0) text += `<div class="row">`

                text += `<div class="col-lg-6">
                            <div class="card card-primary">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-9">
                                            <p class="card-text">
                                                ${resData.data[i].fullName} <br>
                                                Spesialis ${resData.data[i].spesialis}<br>
                                                ${resData.data[i].pengalaman} Tahun Pengalaman<br>`

                for (var j = 0; j < resData.data[i].medicalFacilities.length; j++) {
                    text += `${resData.data[i].medicalFacilities[j].name} (${resData.data[i].medicalFacilities[j].kecamatan}, ${resData.data[i].medicalFacilities[j].kota}) <br>`
                }

                text += `<button class="btn btn-outline-primary btn-md"> Lihat Info Lebih Banyak</button>
                                            </p>
                                        </div>
                                        <div class="col-sm-3">
                                            <img src="/dist/img/user1-128x128.jpg" class="float-sm-right"></img> <br>
                                            <button class="btn btn-outline-primary">Chat</button><br>
                                            <button class="btn btn-primary">Buat Janji</button><br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`

                if (i % 2 == 1) text += `</div>`;
            }

            $('#listDoctor').html(text);
        },
    })
}

function openModal() {
    $.ajax({
        url: "http://localhost:8081/api/doctor/getAllData",
        type: "GET",
        contentType: "application/json",
        success: function (resData) {
            console.log(resData)

            $("#btnSubmit")
                .off("click")
                .on("click", cariDokter);
            $("#myModal").modal("show");
        }
    })
}

function cariDokter() {
    // $.ajax({
    //     url: "http://localhost/"
    // })
}