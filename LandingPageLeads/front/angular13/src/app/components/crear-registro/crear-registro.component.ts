import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lead } from 'src/app/models/lead';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LeadService } from 'src/app/sevices/lead.service';
@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
  styleUrls: ['./crear-registro.component.css']
})
export class CrearRegistroComponent implements OnInit {
  leadForm: FormGroup;
  id!: string | null;

   constructor(private fb: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService, 
              private _leadService: LeadService,
              private aRouter: ActivatedRoute)  { 
                this.leadForm = this.fb.group({
                  lead: ['', Validators.required],
                  email: ['', Validators.required],
                  telefono: ['', Validators.required],
                  direccion: ['', Validators.required] 
                })
                this.id = this.aRouter.snapshot.paramMap.get('id');
             }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarLead() {

    const LEAD: Lead = {
      nombre: this.leadForm.get('lead')?.value,
      email: this.leadForm.get('email')?.value,
      telefono: this.leadForm.get('telefono')?.value,
     direccion: this.leadForm.get('direccion')?.value,
    }
    if(this.id !== null){
      this._leadService.editarLead(this.id,LEAD).subscribe(data =>{
        this.toastr.success("El registro fue actualizado correctamente con exito!!!!!!!","Lead Actualizado");
        this.router.navigate(['/'])
      },error =>{
        this.leadForm.reset();
      }
      )
      

    }else{
      console.log(LEAD);
    this._leadService.guardarLead(LEAD).subscribe(data => {
      this.toastr.success('La suscripcion fue registrado con exito!', 'Usuario Registrado!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.leadForm.reset();
    })
    }

    

  
  }
  esEditar() {

    if(this.id !== null) {
      
      this._leadService.obtenerLead(this.id).subscribe(data => {
        this.leadForm.setValue({
          lead: data.nombre,
          email: data.email,
          telefono: data.telefono,
          direccion: data.direccion,
        })
      })
    }
  }

}
