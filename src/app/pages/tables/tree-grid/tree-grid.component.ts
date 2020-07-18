import { Component, Input } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { ApiService } from './api.service';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';


interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  description: string;

}

@Component({
  selector: 'ngx-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss'],
})


export class TreeGridComponent {
  customColumn = 'name';
  defaultColumns = [ 'description'  ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];
  user = {};

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  // constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
  //   this.dataSource = this.dataSourceBuilder.create(this.data);
  // }

  constructor(private apiservice: ApiService, private authService: NbAuthService) {}
  ngOnInit() {



    // this.apiservice.getProjects().subscribe((data)=>{
    //   console.log(data)
    //   // this.source.load(data)
    // })

    // this.authService.onTokenChange()
    //   .subscribe((token: NbAuthJWTToken) => {

    //     if (token.isValid()) {
    //       this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
    //       console.log(data)

    //     }

    //   });



  }



  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<FSEntry>[] = [
    {
      data: { name: 'name', description: 'description',  },
      children: [

      ],
    },
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}

@Component({
  selector: 'ngx-fs-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon>
      <nb-icon icon="file-text-outline"></nb-icon>
    </ng-template>
  `,
})
export class FsIconComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === 'dir';
  }
}
