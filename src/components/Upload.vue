<template>
    <form>
        <progress value="0" max="100" id="progressUploader">0%</progress>
       <div class="form-group">
         <label for="uploader">File Upload</label>
         <input type="file"
           class="form-control btn btn-small btn-outline-primary" name="uploader" id="uploader" aria-describedby="UploaderHelper" @change="fileBtn($event)">
         <small id="UploaderHelper" class="form-text text-muted">complaint</small>
       </div>
    </form>
   
</template>

<script>
    import { dbstorage } from "../firebaseConfig"

    export default {
        methods: {
            fileBtn: function ( e) {
                e.preventDefault();

                // Get elements
                const progressUploader = document.getElementById('progressUploader');

                //get file
                let getFile = e.target.files[0];

                // set storage ref
                let storageRef = dbstorage.ref('files/'+getFile.name);

                // upload file
                let task = storageRef.put(getFile);
                task.on('state_changed',function progress(snapshot) {
                    let percentage = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
                    progressUploader.value = percentage;
                },
                function error(error) {
                    console.log(error);
                },
                function complete(){
                    console.log('complete uploading');
                }
            );
            }
        }
    }
  

</script>

<style>
    #progressUploader {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
    }
</style>