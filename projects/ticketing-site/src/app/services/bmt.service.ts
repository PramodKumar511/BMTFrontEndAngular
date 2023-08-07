import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CreateAccountComponent } from '../create-account/create-account.component';

@Injectable({
  providedIn: 'root'
})

export class BmtServices {
  apiUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

   //SaveUser

   createAccount = (myAccount:any) =>{
      return this.http.post<any>(this.apiUrl+`/bmt/createAccount`, myAccount);
      //return this.http.post<any>(this.apiUrl+`/orp/getbrancFromReport`,reportWithBranchIds);
   }

   
  //   //UpdateUserData

  //   updateUserData = (updateuserData : any) => {

  //     return this.http.post(this.apiUrl+`/orp/updateUserData`, updateuserData);

  //   }

  /*loginService = (userName: string, pwd : string) =>{

    //this.loginForm.userName= userName;

    this.loginForm.password = pwd;

    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    // return this.http.get(this.apiUrl+"/orp/login",{headers,responseType: 'text' as 'json'})

    return this.http.post<any>(this.apiUrl+"/orp/login",this.loginForm);

  }

 
*/
  getTickets(): Observable<any> {
    //access http get call
    //Import httpclientModule in app.module.ts
    return this.http.get(this.apiUrl + "/bmt/getTickets");
  }



  //   getCategories = (branchList: string[]) => {

  //     //alert("Inside Service meth "+ branchList.branchIdList);

  //     return this.http.post(this.apiUrl+`/orp/getCategoryList`, {branchIdList : branchList} );

  //   }



  //   getReportsByCategory = (branchList: string[], category: string, dateFrom : string, dateTo : string) => {

  //     return this.http.post(this.apiUrl+`/orp/getReportList?categoryName=${category}&dateFrom=${dateFrom}&dateTo=${dateTo}`, {branchIdList : branchList});

  //   }



  //   getReportsByBranchAndFormId = (branchIds: string[], formId: string) => {

  //     return this.http.get(this.apiUrl+`/orp/getbrancFromReport?branchId=${branchIds}&formId=${formId}`);

  //   }



  //   getReportsByBranchArrayAndFormId = (reportWithBranchIds: ReportsPostObj) => {

  //     return this.http.post<any>(this.apiUrl+`/orp/getbrancFromReport`,reportWithBranchIds);

  //   }



  //   getBranchByFormId= (formId: string, dateFrom : string, dateTo : string, fileSearchType : string) => {



  //     return this.http.get(this.apiUrl+`/orp/getbrancFromReport?formId=${formId}&dateFrom=${dateFrom}&dateTo=${dateTo}&fileSearchType=${fileSearchType}`);

  //   }



  //   getFileContent = (filePaths: FilePaths) => {

  //     return this.http.post(this.apiUrl+`/orp/getFile`, filePaths);



  //   }



  //   getForms() : Observable<any>{

  //     return this.http.get(this.apiUrl+"/orp/getForms");



  //   }



  //MonthlyReports

  //   getMonthlyReport = ( fromDate : string, toDate : string) => {

  //     return this.http.get(this.apiUrl+`/orp/getMonthlyLoginReport?fromDate=${fromDate}&toDate=${toDate}`);

  //   }



  //   //UserSearch

  //   getSearchUserData = ( userId : string, userFirstName : string ) => {

  //     return this.http.get(this.apiUrl+`/orp/searchUserData?userId=${userId}&userFirstName=${userFirstName}`);

  //   }







  //   //UpdateUserData

  //   updateUserData = (updateuserData : any) => {

  //     return this.http.post(this.apiUrl+`/orp/updateUserData`, updateuserData);

  //   }



  //   //FormSearch

  //   getSearchFormData = ( formId : string, reportName : string ) => {

  //     return this.http.get(this.apiUrl+`/orp/searchFormData?formId=${formId}&reportName=${reportName}`);

  //   }



  //   //UpdateFormData

  //   UpdateFormData = (updateformData : any) => {

  //     return this.http.post(this.apiUrl+`/orp/updateFormData`, updateformData);

  //   }



  //   //SaveFormData

  //   saveFormData = (formDataToSave : any) => {

  //     return this.http.post(this.apiUrl+`/orp/saveFormData`, formDataToSave);

  //   }



  //   //BranchSearch

  //   getSearchBranchData = (branchId : string, branchName : string ) => {

  //     return this.http.get(this.apiUrl+`/orp/searchBranchData?branchId=${branchId}&branchName=${branchName}`);

  //   }



  //   //UpdateBranchData

  //   UpdateBranchData = (updateBranchData : any) => {

  //     return this.http.post(this.apiUrl+`/orp/updateBranchData`, updateBranchData);

  //   }



  //   //SaveBranchData

  //   saveBranchData = (branchDataToSave : any) => {

  //     return this.http.post(this.apiUrl+`/orp/saveBranchData`, branchDataToSave);

  //   }  



}

