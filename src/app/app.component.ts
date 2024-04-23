import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tinymce-angular-demo';
  key = "a3ecnyznxqeo2l47l2stafwu18xvy4scv59lcafx7s7mffxy"
  editorDisabled: boolean = false;
  textoInicial: string = "<p>Seu texto inicial aqui.</p>";
  

  initConfig = {
    apiKey: 'a3ecnyznxqeo2l47l2stafwu18xvy4scv59lcafx7s7mffxy',
    plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount', // Adicione os plugins que deseja usar
    toolbar: 'undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help',
      file_picker_types: 'image',
      image_advtab: false,
      image_description: false,
      image_dimensions: false,
      block_unsupported_drop: true,
      placeholder: 'Once upon a time...',
      content_css: 'writer',
      content_style: 'img{max-width:100%;height:auto;}',
      images_reuse_filename: true,
      paste_data_images: false,
      height: 'calc(100vh - 88px)',
      images_upload_handler: (blobInfo) => {
        const file = blobInfo.blob();
        const filePath = `${Date.now()}-${blobInfo.filename()}`;
        const ref = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file);
        const promise = new Promise<string>((resolve, reject) => {
          task
            .snapshotChanges()
            .pipe(
              finalize(() =>
                ref
                  .getDownloadURL()
                  .pipe(last())
                  .subscribe((url) => {
                    resolve(url);
                  })
              )
            )
            .subscribe((_) => {
              // do nothing
            });
        });
        return promise;
      },
  };
  ativarEditor(){
    if(this.editorDisabled == false){
      this.editorDisabled = true;
    }else{
      this.editorDisabled = false;
    }
  }
}
