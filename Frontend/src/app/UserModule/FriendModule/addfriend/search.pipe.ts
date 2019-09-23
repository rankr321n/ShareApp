import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(value: any, usersearch: string): any {
    if (!usersearch) {
      return value;
    }
    if (value.length === 0) {
      return;
    } else {
      var resultArray: any = [];
      for (let item of value) {
        // console.log(item.email);

        if (
          // item.firstname.toLowerCase().includes(usersearch.toLowerCase()) ||
          item.email.toLowerCase().includes(usersearch.toLowerCase())
          // item.lastname.toLowerCase().includes(usersearch.toLowerCase())
        ) {
          resultArray.push(item);
          // console.log("pipe");
        }
      }
      return resultArray;
    }
  }
}
