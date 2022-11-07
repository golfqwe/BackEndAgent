<template>
  <div class="page-content">
    <div class="container-fluid">
      <!-- start page title -->
      <div class="row">
        <div class="col-12">
          <div class="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-sm-0">
              List member agent
            </h4>

            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item">
                  <a href="javascript: void(0);">all list member agent</a>
                </li>
                <li class="breadcrumb-item active">
                  List member agent
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <!-- end page title -->

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">
                All list member agent
              </h4>
              <p class="card-title-desc">
                You can search user name to find details of member
              </p>

              <table
                id="datatable"
                class="table table-bordered dt-responsive nowrap"
                style="border-collapse: collapse; border-spacing: 0; width: 100%;"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Full name</th>
                    <th>Status</th>
                    <th>Cash mode</th>
                    <th>Credit Limit</th>
                    <th>Currency</th>
                    <th>Last login ip</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>User A</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>User B</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>User C</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>User D</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>User E</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>User F</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>User G</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>User H</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>User I</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>User J</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>User A</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>User B</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>User C</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>User D</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>User E</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>User F</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>User G</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>User H</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>User I</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>User J</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>User A</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>User B</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>User C</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>User D</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>User E</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>User F</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>User G</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>User H</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>User I</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>User J</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>40</td>
                    <td>admin</td>
                    <td>mr.test robert</td>
                    <td>Active</td>
                    <td> ON</td>
                    <td>100,000</td>
                    <td>THB</td>
                    <td>240:125:555:1254:bc8545:16gf</td>
                    <td>
                      <i class="ri-file-copy-fill" /> <i class="ri-file-lock-fill" /><i
                        class="ri-file-edit-line"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> <!-- end col -->
      </div> <!-- end row -->
    </div> <!-- end card body-->
  </div>
</template>

<script>
export default {
  head () {
    return {
      script: [
        {
          src: '/libs/datatables.net/js/jquery.dataTables.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/datatables.net-buttons/js/dataTables.buttons.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/jszip/jszip.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/pdfmake/build/pdfmake.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/pdfmake/build/vfs_fonts.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/datatables.net-buttons/js/buttons.html5.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/datatables.net-buttons/js/buttons.print.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/datatables.net-buttons/js/buttons.colVis.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/datatables.net-keytable/js/dataTables.keyTable.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/datatables.net-select/js/dataTables.select.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/datatables.net-responsive/js/dataTables.responsive.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/js/pages/list-member-agent.init.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: '/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/libs/datatables.net-select-bs4/css//select.bootstrap4.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
