import { BillsDto } from "../../apis/dto/bills.dto.ts";
import { BillSearch, SupplierList } from "../MockData.ts";
import { SupplierDto } from "../../apis/dto/supplier.dto.ts";

export const getBillsByPhone = (phone: string): BillsDto[] => {
  let res: BillsDto[] = []
  for (const bill of BillSearch) {
    if(bill.phoneNumber === phone){
      res.push(bill)
    }
  }
  return res;
}


export const getSupplierByName = (name: string): SupplierDto[] => {
  let res: SupplierDto[] = [];
  for (const supplier of SupplierList) {
    if(res.length < 4 && supplier.name.startsWith(name)){
      res.push(supplier)

    }
  }
  return res;
}

export const get4LastSupplier = (): SupplierDto[] => {
  return SupplierList.slice(-4);
}

export const getSupplier = (phone: string): SupplierDto | null => {
  for (const item of SupplierList) {
    if(item.phoneNumber === phone){
      return item
    }
  }
  return null;
}
